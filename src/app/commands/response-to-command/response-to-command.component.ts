import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-to-command',
  templateUrl: './response-to-command.component.html',
  styleUrls: ['./response-to-command.component.css']
})
export class ResponseToCommandComponent implements OnInit {

    data: any;

    constructor() { }

    ngOnInit() {
    }

    setData(data: any){
      this.data = data;  
    }
}
