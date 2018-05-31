import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private isAuthendicated: boolean;
    constructor() { }

    public IsAuthenticated() {
      return this.isAuthendicated;
    }

    setAuthentication() {
      this.isAuthendicated = true;  
    }
}
