import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from '../models/message';
import { NgRedux, select } from '@angular-redux/store';
import { IChatState } from '../store/chatState';
import { ADD_MESSAGE, ADD_COMMAND, RESPONSE_TO_COMMAND, REMOVE_MESSAGE, REMOVE_ITEM } from '../store/actions';
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

    private socket: SocketIOClient.Socket = null;  

    constructor(private ngRedux: NgRedux<IChatState>) { 
      this.socket = io(this.url);
      this.socket.on(this.messageEvent, (data) => {        
        this.ngRedux.dispatch({type: ADD_MESSAGE, contentItem: new ContentItem(data.author, MESSAGE, data.message)});        
      });
      this.socket.on(this.commandEvent, (commandData) => {
        this.ngRedux.dispatch({type: ADD_COMMAND, 
                    contentItem: new ContentItem(commandData.author, 
                    commandData.command.type, commandData.command.data)});        
      });
    }

    public setUserChoice(id: string, value: string) {      
      this.ngRedux.dispatch({type: RESPONSE_TO_COMMAND, id: id, 
                            value: value});       
    }

    public sendMessage(currentMessage: string) {              
      this.socket.emit(this.messageEvent, { author: this.ngRedux.getState().author, 
                                            message: currentMessage });           
    }

    public sendCommand() {
      this.socket.emit(this.commandEvent);
    }

    public removeItem(id: string) {
      this.ngRedux.dispatch({type: REMOVE_ITEM, id: id});        
    }
}
