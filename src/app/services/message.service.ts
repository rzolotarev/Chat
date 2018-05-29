import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from '../models/message';
import { NgRedux } from '@angular-redux/store';
import { IChatState } from '../models/IChatState';
import { ADD_MESSAGE, ADD_COMMAND } from '../models/actions/actions';

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
        this.ngRedux.dispatch({type: ADD_MESSAGE, message: new Message(data.author, data.message)});        
      });
      this.socket.on(this.commandEvent, (commandData) => {
        this.ngRedux.dispatch({type: ADD_COMMAND, 
                    message: new Message(commandData.author, '', 
                    commandData.command.type, commandData.command.data)});
        console.log(commandData.command.data);  
      });
    }

    public sendMessage(currentMessage: string) {    
      this.socket.emit(this.messageEvent, { author: 'Roman', message: currentMessage });      
    }

    public sendCommand() {
      this.socket.emit(this.commandEvent);
    }
}
