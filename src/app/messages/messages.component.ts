import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { NgRedux, select } from '@angular-redux/store';
import { IChatState } from '../store/chatState';
import { ADD_MESSAGE, ADD_COMMAND } from '../store/actions';
import { Observable } from 'rxjs';
import { ContentItem } from '../models/contentItem';
import { MESSAGE } from '../models/commandTypes';
import { UpdateScrollService } from '../services/update-scroll.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
      @select() contentItems: Observable<Array<ContentItem>>;
      author: string = '';      
      messageText: string = '';
      @ViewChild('scrolled') private scrollContainer: ElementRef;

      constructor(private ngRedux: NgRedux<IChatState> ,private messageService: MessageService,
                  private updateScrollService: UpdateScrollService){
        this.updateScrollService.scroll.subscribe(() => this.scrollToBottom());
      }

      ngOnInit() {        
        this.author = this.ngRedux.getState().author;        
      }
    
      onKey(event: any) {
        if(event.which == 13)
          this.sendMessage();
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
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch(err) { }                 
    }
}
