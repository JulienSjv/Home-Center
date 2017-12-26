import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

import { MeteoService } from './meteo.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MessagesComponent,
    AccueilComponent,
    MeteoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MeteoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
