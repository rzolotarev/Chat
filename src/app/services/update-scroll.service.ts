import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateScrollService {

  public scroll : BehaviorSubject<boolean>;
  
  constructor() { 
    this.scroll = new BehaviorSubject(true);
  }
}
