import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationComponent } from './authentification/authentification.component';


const routes: Routes = [
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'inscription', component: InscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
