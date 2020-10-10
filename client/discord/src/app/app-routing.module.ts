import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterfaceUtilisateurComponent } from './interface-utilisateur/interface-utilisateur.component';


const routes: Routes = [
  { path: 'interface_utilisateur', component: InterfaceUtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
