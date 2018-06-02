import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  @select() isAuthenticated: Observable<boolean>;
}
