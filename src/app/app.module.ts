//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AngularDraggableModule } from 'angular2-draggable';
import { MovableModule } from 'ng2-movable';
import { ColorPickerModule } from 'ngx-color-picker';
import { DndModule } from 'ng2-dnd';
import { ClickOutsideModule } from 'ng-click-outside';
import { FileDropModule } from 'ngx-file-drop';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap';
import { ChatModule } from './chat/chat.module';
import { AppRoutingModule } from './app-routing.module';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//SERVICES
import { MeteoService } from './meteo.service';
import { MessageService } from './message.service';
import { FeedService } from './feed-service.service';
import { ChatService } from './chat.service';
import { SpeechSynthesisService } from './speech-synthesis.service';
import { TimeZoneService } from './time-zone.service';
import { NexusService } from './nexus.service';


//COMPONENTS
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { NexusComponent } from './nexus/nexus.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';


//utils
import { MessagesComponent } from './messages/messages.component';
import { TestComponent } from './test/test.component';


//meteo
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoDetailsComponent } from './meteo-details/meteo-details.component';
import { MeteoSumaryComponent } from './meteo-sumary/meteo-sumary.component';


//feeds
import { FeedComponent } from './feed/feed.component';
import { FeedGroupComponent } from './feed-group/feed-group.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedDetailsModalComponent } from './feed-details-modal/feed-details-modal.component';
import { FeedConfigModalComponent } from './feed-config-modal/feed-config-modal.component';
//import { FeedKrbComponent } from './feed-krb/feed-krb.component';
//import { FeedGoogleComponent } from './feed-google/feed-google.component';
//import { FeedNxiComponent } from './feed-nxi/feed-nxi.component';
//import { FeedUnivfComponent } from './feed-univf/feed-univf.component';


//PIPES
import { RoundPipe } from './pipe/round.pipe';
import { MeteoIcon } from './pipe/meteo-icon.pipe';
import { DateTimeFormatPipe } from './pipe/date-time.pipe';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { DegwindPipe } from './pipe/degwind.pipe';
import { AsyncPipe } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
import { PaysPipe } from './pipe/pays.pipe';
import { FrenchDaysPipe } from './pipe/french-days.pipe';
import { ThemoviedbService } from './themoviedb.service';
import { FilmService } from './film.service';








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
    FeedGroupComponent,
    SpeechRecognitionComponent,
    ChatDialogComponent,
    NavbarComponent,
    CapitalizePipe,
    DegwindPipe,
    LoaderComponent,
    FeedDetailsModalComponent,
    PaysPipe,
    MapModalComponent,
    NexusComponent,
    FooterComponent,
    FeedComponent,
    FeedConfigModalComponent,
    PanelComponent,
    FrenchDaysPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularDraggableModule,
    MovableModule,
    ColorPickerModule,
    DndModule.forRoot(),
    ClickOutsideModule,
    FileDropModule,
    // ChatModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
   // NgbModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [MeteoService, MessageService, FeedService, ChatService, SpeechSynthesisService, TimeZoneService, NexusService, ThemoviedbService, FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
