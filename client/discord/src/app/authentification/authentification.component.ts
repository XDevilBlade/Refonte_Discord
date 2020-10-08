import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
  private httpClient : HttpClient;

  constructor(httpClient : HttpClient) { 
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
    
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

  hideContentPanelAuthentification(){
    $('#content_panel_authentification').css("display", "none");
    $('#content_panel_inscription').css("display", "block");
  }

}
