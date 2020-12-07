import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RxStompService } from '@stomp/ng2-stompjs';
import { WebsocketService } from '../services/WebSocket/websocket.service';
import { WebSocketOptions } from '../models/websocket.options';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {

  public title = 'Using WebSocket under Angular';
  public messagesRecus: any = {};
  private websocketService : WebsocketService;

  constructor(private stompService: RxStompService) { 
    this.websocketService = new WebsocketService(this.stompService, 
      new WebSocketOptions("ws://localhost:8080/a", "/user/queue/reply", "/app/sendtouser")
    );
  }

  ngOnInit(): void {
    this.initProgressWebSocket();
  }

  onSubmit(form: NgForm) {
    var message = form.value.message;
    this.websocketService.sendMessage(message);
  }

  private initProgressWebSocket = () => {
    const obs = this.websocketService.getObservable();

    obs.subscribe({
      next: this.onNewProgressMsg,
      error: err => {
        console.log(err);
      }
    });
  }

  /**
   * Apply result of the java server notification to the view.
   */
  private onNewProgressMsg = receivedMsg => {
    if (receivedMsg.type === 'SUCCESS') {
      console.log(receivedMsg.message);
      this.messagesRecus = receivedMsg.message;
    }
  }

}
