import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

declare var $: any;

@Component({
  selector: 'app-menu-contacts-channels',
  templateUrl: './menu-contacts-channels.component.html',
  styleUrls: ['./menu-contacts-channels.component.css']
})
export class MenuContactsChannelsComponent implements OnInit {
  
  private width: number;
  private height: number;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    var element = document.getElementById("menu-contacts-channels");
    if (this.checkOverflowX(element)) {
      $("#icone_menu").css("display","block");
      $(".nav-item").css("display","none");
    } else {
      $("#icone_menu").css("display","none");
      $(".nav-item").css("display","block");
    }
  }

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
