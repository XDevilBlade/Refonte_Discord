import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, Injectable } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { createComponent } from '@angular/compiler/src/core';
import { GestionComponentService } from './services/GestionComponent/gestion-component.service';
import { AccessInstanceAppcomponentService } from './services/AccessInstanceAppComponent/access-instance-appcomponent.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  componentRef: any;
  
  @ViewChild('authentificationcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, 
              private gestionComponentService : GestionComponentService, private accessInstanceAppcomponentService : AccessInstanceAppcomponentService){
                this.accessInstanceAppcomponentService.changeInstanceAppComponent = this;
  }

  ngOnInit(){
    const accessInstanceAppcomponentServiceConst = this.accessInstanceAppcomponentService;
    const gestionComponentServiceConst = this.gestionComponentService;
    $( document ).ready(function() {
      gestionComponentServiceConst.createComponent(AccueilComponent, accessInstanceAppcomponentServiceConst.instanceAppComponent);
    });
  }

  

}
