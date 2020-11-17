import { Component, OnInit, Input } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

declare var $: any;

@Component({
  selector: 'app-menu-contacts-channels',
  templateUrl: './menu-contacts-channels.component.html',
  styleUrls: ['./menu-contacts-channels.component.css']
})
export class MenuContactsChannelsComponent implements OnInit {

  
  constructor() { 
    console.log("je construit le composant du menu");
  }

  ngOnInit(): void {
    if (document.body.clientWidth>1083) {
      $("#container-btnToggleShow").removeClass("d-flex");
      $("#container-btnToggleShow").css("display","none");
    } else {
      $("#nav-channels-contacts").css("display","none");
      $("#container-btnToggleShow").addClass("d-flex");
      $("#container-btnToggleShow").css("display","block");
    }
  }

  onResized(event: ResizedEvent) {
    if (document.body.clientWidth>1083) {
      $("#nav-channels-contacts").css("display","block");
      $("#container-btnToggleShow").removeClass("d-flex");
      $("#container-btnToggleShow").css("display","none");
    } else {
      $("#nav-channels-contacts").css("display","none");
      $("#container-btnToggleShow").addClass("d-flex");
      $("#container-btnToggleShow").css("display","block");
    }
  } 

}
