import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from '../models/message';
import { NgRedux, select } from '@angular-redux/store';
import { IChatState } from '../store/chatState';
import { ADD_MESSAGE, ADD_COMMAND, RESPONSE_TO_COMMAND } from '../store/actions';
import { Observable } from 'rxjs/Observable';
import { ContentItem } from '../models/contentItem';
import { MESSAGE } from '../models/commandTypes';
import { ResponseToCommand } from '../models/responseToCommand';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    private readonly url: string = "https://demo-chat-server.on.ag/";
    private readonly messageEvent: string = "message";
    private readonly commandEvent: string = "command";
    author: string;
    responseToCommand: ResponseToCommand;


    private socket: SocketIOClient.Socket = null;  

    constructor(private ngRedux: NgRedux<IChatState>) { 
      this.socket = io(this.url);
      this.socket.on(this.messageEvent, (data) => {
        if(this.responseToCommand){
          this.ngRedux.dispatch({type: RESPONSE_TO_COMMAND, id: this.responseToCommand.contentItemId, 
                                value: `${this.author} ${this.responseToCommand.value}`});   
          this.responseToCommand = null;     
        } else {
          this.ngRedux.dispatch({type: ADD_MESSAGE, contentItem: new ContentItem(data.author, MESSAGE, data.message)});        
        }
      });
      this.socket.on(this.commandEvent, (commandData) => {
        this.ngRedux.dispatch({type: ADD_COMMAND, 
                    contentItem: new ContentItem(commandData.author, 
                    commandData.command.type, commandData.command.data)});        
      });
    }

    public sendUserChoice(id: string, value: string) {
      this.responseToCommand = new ResponseToCommand(id, value);      
      this.sendMessage(value);      
    }    

    public sendMessage(currentMessage: string) {        
      this.author = this.ngRedux.getState().author;
      this.socket.emit(this.messageEvent, { author: this.author, message: currentMessage });           
    }

    public sendCommand() {
      this.socket.emit(this.commandEvent);
    }
}
