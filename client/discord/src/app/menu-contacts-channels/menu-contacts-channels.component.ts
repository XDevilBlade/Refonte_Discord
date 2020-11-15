import { Component, OnInit } from '@angular/core';
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
    console.log("j'initialise le composant du menu");
  }

  onResized(event: ResizedEvent) {
    var width : number = event.newWidth;
    var height  : number = event.newHeight;
    var element = document.body;
    console.log(element.scrollWidth);
    /*if (element.scrollWidth>767) {
      $("#icone_menu").css("display","none");
      $(".nav-item").css("display","block");
    } else {
      $("#icone_menu").css("display","block");
      $(".nav-item").css("display","none");
      
    }
    /*var element = document.getElementById("menu-contacts-channels");
    if (this.checkOverflowX(element)) {
      
    } else {
      
    }*/
  }

  eventButtonToggle(event : Event){
    
    $('.modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
    $('.modal').modal('show');
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
