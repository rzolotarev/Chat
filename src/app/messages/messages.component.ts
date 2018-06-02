import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { NgRedux, select } from '@angular-redux/store';
import { IChatState } from '../store/chatState';
import { ADD_MESSAGE, ADD_COMMAND } from '../store/actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
      @select() currentMessage: Observable<Message>;
      author: string = '';      

      constructor(private ngRedux: NgRedux<IChatState> ,private messageService: MessageService){
      }

      async ngOnInit() {        
        this.author = this.ngRedux.getState().author;
      }
    
      // async sendMessage() {           
      //   this.messageService.sendMessage(this.messageText);
      //   this.ngRedux.dispatch({type: ADD_MESSAGE, message: new Message(this.author, "message", this.messageText)});      
      // }
    
      async sendCommand() {        
        this.messageService.sendCommand();     
      }
}
