import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    messageText: string = '';    
    author: string ="";
    isMine: boolean;
    constructor() { }

    ngOnInit() {
    }

    setData(data: any){
      this.messageText = data.data;
      this.author = data.author;
      this.isMine = data.isMine;      
    }
}
