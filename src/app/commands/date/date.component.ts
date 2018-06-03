import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { UpdateScrollService } from '../../services/update-scroll.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    private title : string = 'Please pick a day';
    private months: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    private date: Date = null;
    private dayButtons : Array<string> = [];
    private id: string = "";
    author: string = '';

    constructor(private messageService : MessageService, private updateScrollService: UpdateScrollService) { }
    
    ngOnInit() {

    }

    ngAfterViewInit() {
      this.updateScrollService.scroll.next(true);
    }

    setData(data: any){
      this.date = new Date(data.data);
      this.author = data.author
      this.id = data.id;

      let startDay = this.date.getDay() - 1;    

      if(startDay >= this.months.length)
        startDay = 0;
      
      for(let i = 0; i < this.months.length; i++){        
        let name = this.months[(startDay + i)%this.months.length];
        this.dayButtons.push(name);
      }      
    }  

    sendResponse(value: string) {
      this.messageService.sendUserChoice(this.id, value);        
    }    
}
