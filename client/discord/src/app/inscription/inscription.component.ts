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

  hideContentPanelInscription(){
    $('#content_panel_inscription').css("display", "none");
    $('#content_panel_authentification').css("display", "block");
  }

}
