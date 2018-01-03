import { Injectable } from '@angular/core';

export interface IWindow extends Window {
  SpeechSynthesisUtterance: any;
  SpeechSynthesis: any;
}

@Injectable()
export class SpeechSynthesisService {


  // private speech: SpeechSynthesis;
  private voices: SpeechSynthesisVoice;
  private msg: SpeechSynthesisUtterance;
  
  constructor() {
    this.msg = new SpeechSynthesisUtterance();
    this.InitVoice();
  }

  InitVoice() {
    if ('speechSynthesis' in window) {
      console.log('Your browser supports speech synthesis.');
      
    } else {
      alert('Sorry your browser does not support speech synthesis. Try this in <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>.');
    }

  }

  
  getVoice(): SpeechSynthesisVoice {
    let voices: SpeechSynthesisVoice[];
    const awaitVoices = new Promise(done => speechSynthesis.onvoiceschanged = done);
      awaitVoices.then(() => {
        voices = speechSynthesis.getVoices();
        this.voices = voices[8];
        console.log('getVoice');
      });
      return this.voices;
  }


  Speak(input: string) {
    console.log(input)
    // const { SpeechSynthesisUtterance }: IWindow = <IWindow>window;
    // const { SpeechSynthesis }: IWindow = <IWindow>window;
    
    this.msg.voice = this.getVoice();
    this.msg.text = input;
    this.msg.lang = 'fr-FR';
    this.msg.volume = 1;
    this.msg.rate = 1.1;
    this.msg.pitch = 1;
    console.log(this.msg);
    (<any>window).speechSynthesis.speak(this.msg);
  }
}

