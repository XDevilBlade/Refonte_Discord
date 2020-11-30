import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Observable } from 'rxjs';

import { WebSocketOptions } from '../../models';
import { StompConfig } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private obsStompConnection: Observable<any>;
  private subscribers: Array<any> = [];
  private subscriberIndex = 0;

  constructor(
    private stompService: RxStompService,
    private options: WebSocketOptions
    ){
    // Initialise a list of possible subscribers.
    this.createObservableSocket();
    // Activate subscription to broker.
    this.connect();
  }

  private createObservableSocket = () => {
    this.obsStompConnection = new Observable(observer => {
      const subscriberIndex = this.subscriberIndex++;
      this.addToSubscribers({ index: subscriberIndex, observer });
      return () => {
        this.removeFromSubscribers(subscriberIndex);
      };
    });
  }

  private addToSubscribers = subscriber => {
    this.subscribers.push(subscriber);
  }

  private removeFromSubscribers = index => {
    for (let i = 0; i < this.subscribers.length; i++) {
      if (i === index) {
        this.subscribers.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Connect and activate the client to the broker.
   */
  private connect = () => {
    var stompConfig : StompConfig = {
      brokerURL: this.options.urlBrokerStompEndpoints,
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
      reconnectDelay: 10000,
      debug: (str) => { 
        console.log("debug connect :");
        console.log(str); 
      }
    };
    this.stompService.stompClient.configure(stompConfig);
    this.stompService.stompClient.onConnect = this.onSocketConnect;
    this.stompService.stompClient.onStompError = this.onSocketError;
    this.stompService.stompClient.activate();
  }

  /**
   * On each connect / reconnect, we subscribe all broker clients.
   */
  private onSocketConnect = frame => {
    this.stompService.stompClient.subscribe("/user/queue/reply", this.socketListener);
  }

  private onSocketError = errorMsg => {
    console.log('Broker reported error: ' + errorMsg);

    var response = {
      type: 'ERROR',
      message: errorMsg
    };

    this.subscribers.forEach(subscriber => {
      subscriber.observer.error(response);
    });
  }

  private socketListener = frame => {
    this.subscribers.forEach(subscriber => {
      subscriber.observer.next(this.getMessage(frame));
    });
  }

  private getMessage = data => {
    var response = {
      type: 'SUCCESS',
      message: data.body
    };
    return response;
  }

  public sendMessage(message){
    this.stompService.stompClient.publish({destination: this.options.messageBroker , body: message});
  }

  /**
   * Return an observable containing a subscribers list to the broker.
   */
  public getObservable = () => {
    return this.obsStompConnection;
  }
}
