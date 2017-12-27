import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { MeteoComponent } from './meteo/meteo.component';

import { MeteoService } from './meteo.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';
import { MeteoSumaryComponent } from './meteo-sumary/meteo-sumary.component';
import { RoundPipe } from './round.pipe';
import { MeteoIcon} from './meteo-icon.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MessagesComponent,
    AccueilComponent,
    MeteoDetailsComponent,
    MeteoSumaryComponent,
    RoundPipe,
    MeteoIcon
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [MeteoService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
