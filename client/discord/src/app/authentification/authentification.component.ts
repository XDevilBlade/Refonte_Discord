import { Component, OnInit, Output, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {AppComponent} from '../app.component';
import { InterfaceUtilisateurComponent } from '../interface-utilisateur/interface-utilisateur.component';
import { GestionComponentService } from '../services/GestionComponent/gestion-component.service';
import { AccessInstanceAppcomponentService } from '../services/AccessInstanceAppComponent/access-instance-appcomponent.service';

declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private httpClient : HttpClient, 
              private gestionComponentServiceConst :GestionComponentService, 
              private accessInstanceAppcomponentService : AccessInstanceAppcomponentService) { 
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
          this.gestionComponentServiceConst.createComponent(InterfaceUtilisateurComponent, this.accessInstanceAppcomponentService.instanceAppComponent);
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
