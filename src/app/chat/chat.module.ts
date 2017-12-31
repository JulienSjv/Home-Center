import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
