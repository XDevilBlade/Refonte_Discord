import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { WebsocketService } from '../WebSocket/websocket.service';
import { WebSocketOptions } from '../../models/websocket.options';

@Injectable({
  providedIn: 'root'
})
export class ProcessWebsocketService extends WebsocketService {

  constructor(stompService: RxStompService) {
    super(
      stompService,
      new WebSocketOptions("/app/message", "ws://localhost:8080/stomp")
    );
  }
}
