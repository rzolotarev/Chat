import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { UpdateScrollService } from '../../services/update-scroll.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

      private title: string = 'Please rate the conversation';
      private author: string;
      private rate: Array<number> = [];
      private stars: Array<number> = [];
      private chosenAssesment: number = 0;      
      private id: string;
      initialValue: number = 0;
      max: number;

      constructor(private messageService: MessageService, private updateScrollService: UpdateScrollService) { }

      ngOnInit() {

      }   

      ngAfterViewInit() {
        this.updateScrollService.scroll.next(true);
      }

      isGreater(firstValue: number, secondValue: number) : boolean {
        return firstValue > secondValue;
      }
      
      setData(rate: any){
        this.rate = rate.data;
        this.max = rate.data[1];
        this.id = rate.id;
        this.author = rate.author;
        for(let i = this.rate[0]; i <= this.rate[1]; i++)
          this.stars.push(i);      
      }

      setAssesment(value: number){
        this.chosenAssesment = value;
        this.messageService.setUserChoice(this.id, value.toString());  
      }        
}
