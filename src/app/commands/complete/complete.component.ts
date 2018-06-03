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
    id: string = '';

    constructor(private messageService: MessageService) { }

    ngOnInit() {
    }

    setData(complete: any){
      this.answers = complete.data;
      this.id = complete.id;
    }

    sendResponse(value: string) {
      this.messageService.sendUserChoice(this.id, value);        
    }    
}
