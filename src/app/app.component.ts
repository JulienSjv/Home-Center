import { Component } from '@angular/core';
import { Http , Response} from '@angular/http' ;
import { SpeechRecognitionService } from './speech-recognition.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpeechRecognitionService]
})
export class AppComponent {
  title = 'Home Center';
  constructor(private http: Http) { }

}
