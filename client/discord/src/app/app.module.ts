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
import { TchatComponent } from './tchat/tchat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { AngularResizedEventModule } from 'angular-resize-event';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    InscriptionComponent,
    AccueilComponent,
    InterfaceUtilisateurComponent,
    MenuContactsChannelsComponent,
    TchatComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularResizedEventModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
