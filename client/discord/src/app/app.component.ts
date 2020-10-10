import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { AccueilComponent } from './accueil/accueil.component';
import { createComponent } from '@angular/compiler/src/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  componentRef: any;
  
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver){

  }

  ngOnInit(){
    const appComponent : AppComponent = this; 
    $( document ).ready(function() {
      appComponent.createComponent(AccueilComponent);
    });
    
  }

  createComponent(componentAAfficher : Type<unknown>) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(componentAAfficher);
    this.componentRef = this.entry.createComponent(factory);
  }

  destroyComponent() {
      this.componentRef.destroy();
  }

}
