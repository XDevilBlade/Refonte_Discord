import { Injectable, Type, ComponentFactoryResolver, ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionComponentService {
  private mapComponentRef = {};
  //private componentRef: ComponentRef<any>;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createComponent(componentInstance: any, viewContainerRef: any){
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentInstance);
      viewContainerRef.clear();
      console.log("avant la création du composant");
      var componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentFactory);
      console.log("après la création du composant");
      componentRef.instance.entryParent = viewContainerRef;
      this.mapComponentRef[componentInstance.name] = componentRef;
  }

  destroyComponent(componentInstance: any) {
      if (this.mapComponentRef.hasOwnProperty(componentInstance.name)) {
        var componentRef: ComponentRef<any> = this.mapComponentRef[componentInstance.name];
        componentRef.destroy();
        delete this.mapComponentRef[componentInstance.name];
      }
  }
}
