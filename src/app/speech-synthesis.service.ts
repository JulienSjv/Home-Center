import { Injectable } from '@angular/core';

export interface IWindow extends Window {
  SpeechSynthesisUtterance: any;
  SpeechSynthesis: any;
}

@Injectable()
export class SpeechSynthesisService {


  private speech: SpeechSynthesis;
  private voices: any;

  constructor() {
    // this.InitVoice();
  }

  // InitVoice() {
  //   if ('speechSynthesis' in window) {
  //     console.log('Your browser supports speech synthesis.');
  //     const awaitVoices = new Promise(done => speechSynthesis.onvoiceschanged = done);
  //     awaitVoices.then(() => {
  //       let voices = speechSynthesis.getVoices();
  //       this.voices = voices[8];
  //     });
  //   } else {
  //     alert('Sorry your browser does not support speech synthesis. Try this in <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>.');
  //   }

  // }


  Speak(input) {
    const { SpeechSynthesisUtterance }: IWindow = <IWindow>window;
    const { SpeechSynthesis }: IWindow = <IWindow>window;
    var msg = new SpeechSynthesisUtterance();
    msg.voice = this.voices;
    msg.text = input;
    msg.lang = 'fr-FR';
    msg.volume = 1;
    msg.rate = 1.1;
    msg.pitch = 1;
    (<any>window).speechSynthesis.speak(msg);
  }
}

