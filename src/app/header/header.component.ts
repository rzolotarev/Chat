import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @select() author;

    constructor() { }

    ngOnInit() {
      
    }

}
