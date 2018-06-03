import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { UpdateScrollService } from '../../services/update-scroll.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
    private title: string = 'Do you want to close the conversation';
    private answers: Array<string> = [];
    id: string = '';
    author: string = '';
    constructor(private messageService: MessageService, private updateScrollService: UpdateScrollService) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
      this.updateScrollService.scroll.next(true);
    }

    setData(complete: any){
      this.answers = complete.data;
      this.author = complete.author
      this.id = complete.id;
    }

    sendResponse(value: string) {
      this.messageService.sendUserChoice(this.id, value);        
    }    
}
