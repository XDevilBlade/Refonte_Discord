import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, Injectable } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { createComponent } from '@angular/compiler/src/core';
import { GestionComponentService } from './services/GestionComponent/gestion-component.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
 
  @ViewChild('container', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private gestionComponentService : GestionComponentService){               
                
  }

  ngOnInit(){
 
    console.log("j'initialise appcomponent");
    const instanceAppComponent = this;
    const gestionComponentServiceConst = this.gestionComponentService;
    $( document ).ready(function() {
      gestionComponentServiceConst.createComponent(AccueilComponent,instanceAppComponent.entry);
    });
  }  
    
  ngOnDestroy():void{
   
  }

  

}
