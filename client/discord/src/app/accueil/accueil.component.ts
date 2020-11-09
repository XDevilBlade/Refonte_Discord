import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GestionComponentService } from '../services/GestionComponent/gestion-component.service';
import { InterfaceUtilisateurComponent } from '../interface-utilisateur/interface-utilisateur.component';
import { AuthentificationComponent } from '../authentification/authentification.component';

declare var $: any;

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @ViewChild('accueil', { read: ViewContainerRef }) entryChild: ViewContainerRef;

  private entryParent : ViewContainerRef;

  constructor(private gestionComponentService : GestionComponentService) { 

  }

  ngAfterContentInit(): void {
    this.gestionComponentService.createComponent(AuthentificationComponent,this.entryChild);
  }

  ngOnDestroy():void{
    this.gestionComponentService.createComponent(InterfaceUtilisateurComponent, this.entryParent);
  }

}
