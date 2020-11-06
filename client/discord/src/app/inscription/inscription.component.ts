import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GestionComponentService } from '../services/GestionComponent/gestion-component.service';
import { AuthentificationComponent } from '../authentification/authentification.component';

declare var $: any;

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private entryParent: ViewContainerRef;

  constructor(private httpClient : HttpClient, private gestionComponentService : GestionComponentService) { 
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    var informationInscription = form.value;
    console.log(informationInscription);
    var body = {pseudo : informationInscription.pseudo, mdp : informationInscription.mdp};
    const options = {responseType: 'text' as 'text'};
    
    this.httpClient
      .put('http://localhost:8080/inscription', body, options)
      .subscribe(
        (messageSucceed) => {
          $('#resultatInscr').html(messageSucceed);
          $('#resultatInscr').css("color", "green");
        },
        (error) => {
          var messageErreur = error.error;
          $('#resultatInscr').html(messageErreur);
          $('#resultatInscr').css("color", "red");
        },
        () => {
          console.log("complete");
        }
      );
  }

  goPageAuthentification(){
    this.gestionComponentService.createComponent(AuthentificationComponent, this.entryParent);
  }

}
