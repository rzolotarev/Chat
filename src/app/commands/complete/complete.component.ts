import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
    private title: string = 'Do you want to close the conversation';
    private answers: Array<string> = [];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
    }

    setData(complete: Array<string>){
      this.answers = complete;  
    }

    sendResponse(value: string) {
      this.messageService.sendMessage(value);      
    }    
}
