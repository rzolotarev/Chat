import { Injectable } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IChatState } from '../models/IChatState';
import { AUTHENTICATE } from '../models/actions/actions';
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

    public TryToAuthenticate(username: string, password: string) :  Observable<boolean> {
      this.ngRedux.dispatch({type: AUTHENTICATE, author: username});
      return this.IsAuthenticated();
    }
}
