import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { NgRedux, select } from '@angular-redux/store';
import { IChatState } from '../models/IChatState';
import { ADD_MESSAGE, ADD_COMMAND } from '../models/actions/actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
      @select() messages: Observable<Message>;
      messageText: string;

      constructor(private ngRedux: NgRedux<IChatState> ,private messageService: MessageService){
      }

      ngOnInit() {
      }
    
      public sendMessage(): void {      
        this.messageService.sendMessage(this.messageText);
        this.ngRedux.dispatch({type: ADD_MESSAGE, message: new Message('Roman', "message", this.messageText)});      
      }
    
      public sendCommand(): void {
        this.messageService.sendCommand();
        this.ngRedux.dispatch({type: ADD_COMMAND, message: new Message('Roman', '', 'sendRandomCommand')}); 
      }
}
