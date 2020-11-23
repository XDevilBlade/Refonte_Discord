import { Injectable } from '@angular/core';
import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import { WebsocketService } from '../WebSocket/websocket.service';
import { WebSocketOptions } from '../../models/websocket.options';

export const progressStompConfig: InjectableRxStompConfig = {
  webSocketFactory: () => {
    return new WebSocket('ws://localhost:8080/stomp');
  }
};

@Injectable({
  providedIn: 'root'
})
export class ProcessWebsocketService extends WebsocketService {

  constructor(stompService: RxStompService) {
    super(
      stompService,
      progressStompConfig,
      new WebSocketOptions('/topic/progress')
    );
  }
}
