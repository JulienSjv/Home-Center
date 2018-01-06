import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertModule } from 'ngx-bootstrap';
import { ChatModule } from './chat/chat.module';


import { AppComponent } from './app.component';


import { MeteoService } from './meteo.service';
import { MessageService } from './message.service';
import { FeedService } from './feed-service.service';
import { ChatService } from './chat.service';

import { MeteoComponent } from './meteo/meteo.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';
import { MeteoSumaryComponent } from './meteo-sumary/meteo-sumary.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

import { RoundPipe } from './pipe/round.pipe';
import { MeteoIcon } from './pipe/meteo-icon.pipe';
import { DateTimeFormatPipe } from './pipe/date-time.pipe';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { DegwindPipe } from './pipe/degwind.pipe';
import { AsyncPipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';

// Material design.
// import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { FeedNxiComponent } from './feed-nxi/feed-nxi.component';
import { FeedUnivfComponent } from './feed-univf/feed-univf.component';
import { FeedGroupComponent } from './feed-group/feed-group.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { SpeechSynthesisService } from './speech-synthesis.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedKrbComponent } from './feed-krb/feed-krb.component';
import { FeedGoogleComponent } from './feed-google/feed-google.component';
import { LoaderComponent } from './loader/loader.component';
import { FeedDetailsModalComponent } from './feed-details-modal/feed-details-modal.component';
import { PaysPipe } from './pipe/pays.pipe';
import { TimeZoneService } from './time-zone.service';



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
    TimeAgoPipe,
    FeedNxiComponent,
    FeedUnivfComponent,
    FeedGroupComponent,
    SpeechRecognitionComponent,
    ChatDialogComponent,
    NavbarComponent,
    CapitalizePipe,
    DegwindPipe,
    FeedKrbComponent,
    FeedGoogleComponent,
    LoaderComponent,
    FeedDetailsModalComponent,
    PaysPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    // ChatModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    NgbModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [MeteoService, MessageService, FeedService, ChatService, SpeechSynthesisService, TimeZoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
