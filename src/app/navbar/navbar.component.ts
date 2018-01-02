import { Component, OnInit } from '@angular/core';
import { Http , Response} from '@angular/http' ;
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SpeechRecognitionService]

})
export class NavbarComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
