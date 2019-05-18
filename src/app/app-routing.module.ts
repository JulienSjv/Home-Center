import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { NexusComponent} from './nexus/nexus.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent, data: { animation: { value: 'accueil'}}},
  { path: 'meteo', component: MeteoComponent, data: { animation: { value: 'meteo'}} },
  { path: 'chatbox', component: ChatDialogComponent, data: { animation: { value: 'chatbox'}} },
  { path: 'nexus', component: NexusComponent, data: { animation: { value: 'nexus'}} },
  { path: 'test', component: TestComponent, data: { animation: { value: 'test'}} },

  // { path: 'meteo/:city', component: MeteoDetailsComponent },
  { path: '**', component: AccueilComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }