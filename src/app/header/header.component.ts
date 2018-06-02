import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @select() author: Observable<string>;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {

    }

    logout() {
      this.authService.Logout();
      this.router.navigate(['login']); 
    }

}
