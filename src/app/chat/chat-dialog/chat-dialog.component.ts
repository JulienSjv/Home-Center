import { Component, OnInit, AfterViewInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService, Message } from '../../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { SpeechSynthesisService } from '../../speech-synthesis.service'

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css'],
 
})

export class ChatDialogComponent implements OnInit, AfterViewChecked, AfterViewInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;

  constructor(public chat: ChatService,
    public speechSynthesisService: SpeechSynthesisService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) 
      );
      document.querySelector('body').style.backgroundImage = "";
      document.querySelector('body').classList.add('chatbox');


  }

  ngAfterViewInit(): void {
    this.speechSynthesisService.Speak("Bonjour!"); // comment ça va aujourd'hui?");
    // const botMessage = new Message("Bonjour!", 'bot');
    // this.chat.update(botMessage);
  }
  

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
  
}