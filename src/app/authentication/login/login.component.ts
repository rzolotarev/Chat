import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
      this.authService.setAuthentication();
      if(this.authService.IsAuthenticated())
        this.router.navigate(['']);
      // message что невалидно        
    }
}
