import { Component, OnInit } from '@angular/core';
import { UpdateScrollService } from '../../services/update-scroll.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    messageText: string = '';    
    author: string ="";
    isMine: boolean;
    constructor(private updateScrollService: UpdateScrollService) { }

    ngOnInit() {
    }     

    ngAfterViewInit() {
      this.updateScrollService.scroll.next(true);
    }

    setData(data: any){
      this.messageText = data.data;
      this.author = data.author;
      this.isMine = data.isMine;      
    }
}
