import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProcessWebsocketService } from '../services/ProgressWebSocket/process-websocket.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {

  public title = 'Using WebSocket under Angular';
  public messagesRecus: any = {};

  constructor(private progressWebsocketService: ProcessWebsocketService) { }

  ngOnInit(): void {
    this.initProgressWebSocket();
  }

  onSubmit(form: NgForm) {
    var message = form.value.message;
    this.progressWebsocketService.sendMessage(message);
  }

  private initProgressWebSocket = () => {
    const obs = this.progressWebsocketService.getObservable();

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
