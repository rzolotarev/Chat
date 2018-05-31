import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

    private title: string = 'Please rate your experiance';
    private rate: Array<number> = [];
    private stars: Array<number> = [];
    private chosenAssesment: number = 0;

    constructor(private messageService: MessageService) { }

    ngOnInit() {

    }

    isGreater(firstValue: number, secondValue: number) : boolean {
      return firstValue > secondValue;
    }
    
    setData(rate: any){
      this.rate = rate;
      for(let i = this.rate[0]; i <= this.rate[1]; i++)
        this.stars.push(i);      
    }

    setAssesment(value: number){
      this.chosenAssesment = value;
      this.messageService.sendMessage(value.toString());  
    }    
}
