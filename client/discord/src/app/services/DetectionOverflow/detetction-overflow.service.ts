import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetetctionOverflowService {

  constructor() { }

  checkOverflowX (element : any) {
    if (element.offsetWidth < element.scrollWidth) {
      return true;
    } else {
      return false;
    }
  }

  checkOverflowY (element : any) {
    if (element.offsetHeight < element.scrollHeight) {
      return true;
    } else {
      return false;
    }
  }
  
}
