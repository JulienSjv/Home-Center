import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { MeteoComponent } from './meteo/meteo.component';

import { MeteoService } from './meteo.service';
import { MessageService } from './message.service';
import { FeedService } from './feed-service.service';

import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';
import { MeteoSumaryComponent } from './meteo-sumary/meteo-sumary.component';
import { FeedCardComponent } from './feed-card/feed-card.component';

import { RoundPipe } from './pipe/round.pipe';
import { MeteoIcon } from './pipe/meteo-icon.pipe';
import { DateTimeFormatPipe } from './pipe/date-time.pipe';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { AsyncPipe } from '@angular/common';
import {TimeAgoPipe} from 'time-ago-pipe';

// Material design.
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { EscapeHtmlPipe } from './pipe/keep-html.pipe';
import { FeedNxiComponent } from './feed-nxi/feed-nxi.component';
import { FeedUnivfComponent } from './feed-univf/feed-univf.component';
import { FeedGroupComponent } from './feed-group/feed-group.component';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MessagesComponent,
    AccueilComponent,
    MeteoDetailsComponent,
    MeteoSumaryComponent,
    RoundPipe,
    MeteoIcon,
    DateTimeFormatPipe,
    FeedCardComponent,
    StripHtmlTagsPipe,
    EscapeHtmlPipe,
    TimeAgoPipe,
    FeedNxiComponent,
    FeedUnivfComponent,
    FeedGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AlertModule.forRoot()
  ],
  providers: [MeteoService, MessageService, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
