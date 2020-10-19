import { Injectable } from '@angular/core';
import { AppComponent } from './../../app.component';

@Injectable({
  providedIn: 'root'
})

export class AccessInstanceAppcomponentService {
  constructor() { }

  private appComponent : AppComponent;

  get instanceAppComponent():AppComponent{
    return this.appComponent;
  }

  set changeInstanceAppComponent(appComponent : AppComponent){
    this.appComponent = appComponent;
  }
}
