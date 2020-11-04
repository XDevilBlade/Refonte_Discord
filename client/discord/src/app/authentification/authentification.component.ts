import { Component, OnInit, Output, Input, SimpleChanges, ViewContainerRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { InterfaceUtilisateurComponent } from '../interface-utilisateur/interface-utilisateur.component';
import { GestionComponentService } from '../services/GestionComponent/gestion-component.service';
import { AccueilComponent } from '../accueil/accueil.component';

declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  private entry: ViewContainerRef;

  constructor(private httpClient : HttpClient, 
              private gestionComponentService :GestionComponentService) { 
                console.log("je construit le composant Authentification");
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log("change element authentification");
  }

  ngOnInit(): void {
    console.log("j'initialise le composant Authentification");
  }

  onSubmit(form: NgForm) {
    var informationAuthentification = form.value;
    
    var parameter : HttpParams = new HttpParams();
    parameter = parameter.append("pseudo",informationAuthentification.pseudo);
    parameter = parameter.append("mdp",informationAuthentification.mdp);
    
    const options = {params : parameter, responseType: 'text' as 'text'};
    
    this.httpClient
      .get('http://localhost:8080/authentification', options )
      .subscribe(
        (messageSucceed) => {
          $('#resultatAuth').html(messageSucceed);
          $('#resultatAuth').css("color", "green");
          console.log(this.entry)
          //this.gestionComponentService.createComponent(InterfaceUtilisateurComponent, this.entry);
          this.ngOnDestroy();
        },
        (error) => {
          var messageErreur = error.error;
          $('#resultatAuth').html(messageErreur);
          $('#resultatAuth').css("color", "red");
        },
        () => {
          console.log("complete");
        }
      );
  }


  hideContentPanelAuthentification(baliseAFaireApparaitre : any){
    $('#content_panel_authentification').css("display", "none");
    $('#'+baliseAFaireApparaitre+'').css("display", "block");
  }

  ngOnDestroy():void{
    this.gestionComponentService.destroyComponent(AccueilComponent);
  }

}
