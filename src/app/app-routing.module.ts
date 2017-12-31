import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: 'chat', component: ChatDialogComponent },
  { path: 'meteo/:city', component: MeteoDetailsComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }