import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionComponentService {

  constructor() { }

  createComponent(componentAAfficher : Type<unknown>, componentARecevoirLAffichage : any) {
    componentARecevoirLAffichage.entry.clear();
    const factory = componentARecevoirLAffichage.resolver.resolveComponentFactory(componentAAfficher);
    componentARecevoirLAffichage.componentRef = componentARecevoirLAffichage.entry.createComponent(factory);
  }

  destroyComponent(componentADetruire : any) {
    componentADetruire.destroy();
  }
}
