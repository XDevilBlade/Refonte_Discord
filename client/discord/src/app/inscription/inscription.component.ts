import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private httpClient : HttpClient;

  constructor(httpClient : HttpClient) { 
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    var informationInscription = form.value;
    
    var parameter : HttpParams = new HttpParams();
    parameter = parameter.append("pseudo",informationInscription.pseudo);
    parameter = parameter.append("mdp",informationInscription.mdp);

    const options = {params : parameter, responseType: 'text' as 'text'};
    
    this.httpClient
      .put('http://localhost:8080/inscription', options )
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

  deleteContentPanelPageAccueil(){
    $('#content_panel_inscription').remove();
  }

}
