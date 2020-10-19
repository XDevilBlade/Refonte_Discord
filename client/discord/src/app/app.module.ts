import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InterfaceUtilisateurComponent } from './interface-utilisateur/interface-utilisateur.component';
import { MenuContactsChannelsComponent } from './menu-contacts-channels/menu-contacts-channels.component';
import { ConversationComponent } from './conversation/conversation.component';
import { GestionComponentService } from './services/GestionComponent/gestion-component.service';
import { AccessInstanceAppcomponentService } from './services/AccessInstanceAppComponent/access-instance-appcomponent.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    AccueilComponent,
    InterfaceUtilisateurComponent,
    MenuContactsChannelsComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AccueilComponent,
    InterfaceUtilisateurComponent
  ]
})
export class AppModule { }
