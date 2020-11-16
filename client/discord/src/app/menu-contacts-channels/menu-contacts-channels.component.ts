import { Component, OnInit, Input } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

declare var $: any;

@Component({
  selector: 'app-menu-contacts-channels',
  templateUrl: './menu-contacts-channels.component.html',
  styleUrls: ['./menu-contacts-channels.component.css']
})
export class MenuContactsChannelsComponent implements OnInit {
  
  @Input()isFenetreResponsive : boolean;
  
  constructor() { 
    console.log("je construit le composant du menu");
  }

  ngOnInit(): void {
    

    if (this.isFenetreResponsive === false) {
      $("#col-btnToggleClose").css("display","none");
      if (document.body.clientWidth>1083) {
        $("#container-btnToggleShow").removeClass("d-flex");
        $("#container-btnToggleShow").css("display","none");
      } else {
        $("#nav-channels-contacts").css("display","none");
        $("#container-btnToggleShow").addClass("d-flex");
        $("#container-btnToggleShow").css("display","block");
      }
    }
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

  eventButtonToggleShow(){
    $('#myModal').on('show.bs.modal', function (e) {
      $("#container-btnToggleShow").removeClass("d-flex");
      $("#container-btnToggleShow").css("display","none");
    });
    $('#myModal').modal({
      show: true,
      keyboard: false,
      backdrop: 'static'
    });
    
  }

  eventButtonToggleClose(){
    $('#myModal').modal('hide');
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
