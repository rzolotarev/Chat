import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { NgRedux, select } from '@angular-redux/store';
import { IChatState } from '../store/chatState';
import { ADD_MESSAGE, ADD_COMMAND } from '../store/actions';
import { Observable } from 'rxjs';
import { ContentItem } from '../models/contentItem';
import { MESSAGE } from '../models/commandTypes';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
      @select() contentItems: Observable<Array<ContentItem>>;
      author: string = '';      
      messageText: string = '';
      @ViewChild('scrolled') private myScrollContainer: ElementRef;

      constructor(private ngRedux: NgRedux<IChatState> ,private messageService: MessageService){
      }

      ngOnInit() {        
        this.author = this.ngRedux.getState().author;        
      }
    
      ngAfterViewChecked(){
        this.scrollToBottom();
      }

      sendMessage() {           
        this.messageService.sendMessage(this.messageText);
        this.ngRedux.dispatch({type: ADD_MESSAGE, contentItem: new ContentItem(this.author, MESSAGE, this.messageText, true)});   
        this.messageText = '';           
      }
    
      sendCommand() {        
        this.messageService.sendCommand();             
      }

      scrollToBottom(){
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }
}
