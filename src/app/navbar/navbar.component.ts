import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { SpeechSynthesisService } from '../speech-synthesis.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SpeechRecognitionService]

})
export class NavbarComponent implements OnInit, AfterViewInit {
  

  constructor(
    private http: Http,
    private speechSynthesisService: SpeechSynthesisService) { }

    private voices: SpeechSynthesisVoice;

  ngOnInit() {
    //  this.speechSynthesisService.InitVoice();
  }

  ngAfterViewInit(): void {
    // this.speechSynthesisService.Speak("Bonjour TeurTe!"); // comment ça va aujourd'hui?");
  }

}
