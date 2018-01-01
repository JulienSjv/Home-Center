import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { SpeechSynthesisService } from '../speech-synthesis.service'

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css']
})
export class SpeechRecognitionComponent implements OnInit, OnDestroy {
  showSearchButton: boolean;
  speechData: string;

  constructor(
    private speechRecognitionService: SpeechRecognitionService,
    private speechSynthesisService: SpeechSynthesisService) {
    this.showSearchButton = true;
    this.speechData = "";
  }

  ngOnInit() {
    console.log("hello")
    this.speechSynthesisService.Test('coucou ça va, je t\'écoute, di moi ce que tu veux');
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record()
      .subscribe(
      //listener
      (value) => {
        this.speechData = value;
        console.log(value);
      },
      //errror
      (err) => {
        console.log(err);
        if (err.error == "no-speech") {
          console.log("--restatring service--");
          this.activateSpeechSearchMovie();
        }
      },
      //completion
      () => {
        this.showSearchButton = true;
        console.log("--complete--");
        this.activateSpeechSearchMovie();
      });
  }

}
