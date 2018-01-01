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
    this.InitVoice();
  }

  InitVoice() {
    const awaitVoices = new Promise(done => speechSynthesis.onvoiceschanged = done);
    awaitVoices.then(() => {
      let voices = speechSynthesis.getVoices();
      this.voices = voices[8];
    });
  }


  Test(input) {
    // this.InitVoice();
    if ('speechSynthesis' in window) {
      console.log('Your browser supports speech synthesis.');
      // speak('hi');
    } else {
      alert('Sorry your browser does not support speech synthesis. Try this in <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>.');
    }
    const { SpeechSynthesisUtterance }: IWindow = <IWindow>window;
    const { SpeechSynthesis }: IWindow = <IWindow>window;
    var msg = new SpeechSynthesisUtterance();

    // const awaitVoices = new Promise(done => speechSynthesis.onvoiceschanged = done);
    // awaitVoices.then(() => {
    //   let voices = speechSynthesis.getVoices();
       msg.voice = this.voices;
      msg.text = input;
      msg.lang = 'fr-FR';
      msg.volume = 1;
      msg.rate = 1.1;
      msg.pitch = 1;
      console.log(this.voices);
      console.log(msg);
      (<any>window).speechSynthesis.speak(msg);
    // });

    // this.voices = window.speechSynthesis.onvoiceschanged = function () {
    //  return (<any>window).speechSynthesis.getVoices();
    // };

    // console.log(this.voices);
    // Create a new instance of SpeechSynthesisUtterance.
    // this.voices = ms
    // Set the text.
    // msg.text = input;
    // Set the attributes.
    // msg.lang = 'fr-FR';
    // msg.voice = 'native'; msg.voice = 'Google US English'; //  'Google UK English Female' 
    // msg.voice = this.voices[8];
    // msg.volume = 1;
    // msg.rate = 1;
    // msg.pitch = 1;
    //  msg.onend = function(event) { console.log('Speech complete'); }
    // Queue this utterance.
    // console.log(msg);
    // (<any>window).speechSynthesis.speak(msg);
  }
}

