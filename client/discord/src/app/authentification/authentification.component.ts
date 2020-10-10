import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { InterfaceUtilisateurComponent } from '../interface-utilisateur/interface-utilisateur.component';

declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
  private httpClient : HttpClient;
  private appComponent : AppComponent;

  constructor(httpClient : HttpClient, appComponent : AppComponent) { 
    this.httpClient = httpClient;
    this.appComponent = appComponent;
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
          this.appComponent.createComponent(InterfaceUtilisateurComponent);
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



}
