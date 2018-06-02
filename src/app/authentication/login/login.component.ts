import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IChatState } from '../../store/chatState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // TODO: сделать лучше
    private username: string = "";
    private password: string = "";

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {      
    }

    login() {          
      if(this.authService.TryToLogin(this.username, this.password))           
        this.router.navigate(['']);            
      // message что невалидно        
    }
}
