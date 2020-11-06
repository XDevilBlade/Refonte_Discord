import { Component, OnInit, Output, Input, SimpleChanges, ViewContainerRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GestionComponentService } from '../services/GestionComponent/gestion-component.service';
import { AccueilComponent } from '../accueil/accueil.component';
import { InscriptionComponent } from '../inscription/inscription.component'

declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  private doitDetruireComposantAccueil : boolean;
  private entryParent: ViewContainerRef;

  constructor(private httpClient : HttpClient, 
              private gestionComponentService :GestionComponentService) { 
                this.doitDetruireComposantAccueil = false;
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
          this.doitDetruireComposantAccueil = true;
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


  goPageInscription(){
    this.gestionComponentService.createComponent(InscriptionComponent, this.entryParent);
  }

  ngOnDestroy():void{
    if(this.doitDetruireComposantAccueil){
      this.gestionComponentService.destroyComponent(AccueilComponent);
    }
  }

}
