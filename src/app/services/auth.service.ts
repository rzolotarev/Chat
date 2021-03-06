import { Injectable } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IChatState } from '../store/chatState';
import { LOGIN, LOGOUT } from '../store/actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    @select() isAuthenticated: Observable<boolean>;
    constructor( private ngRedux: NgRedux<IChatState>) { }

    public IsAuthenticated() : Observable<boolean> {
      return this.isAuthenticated;            
    }  

    public TryToLogin(username: string, password: string) :  Observable<boolean> {
      this.ngRedux.dispatch({type: LOGIN, author: username});
      return this.IsAuthenticated();
    }

    public Logout(){
      this.ngRedux.dispatch({type: LOGOUT});
    }
}
