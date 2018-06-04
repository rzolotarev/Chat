import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-response-to-command',
  templateUrl: './response-to-command.component.html',
  styleUrls: ['./response-to-command.component.css']
})
export class ResponseToCommandComponent implements OnInit {

    response: any;    

    constructor(private messageService: MessageService) { }

    ngOnInit() {
      this.messageService.sendMessage(this.response.data);  
    }

    setData(response: any){
      this.response = response;  
    }
}
