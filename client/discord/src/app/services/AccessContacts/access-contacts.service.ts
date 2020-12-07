import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessContactsService {

  private obsMessagesEntrants: Observable<string>;

  constructor() {

    this.obsMessagesEntrants = new Observable(
      subscribe => {
        
      }
    )

  }
}
