
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
        return this.authService
            .IsAuthenticated()
            .map((result: boolean) => {
                if(result)  return true;
                else { 
                    this.router.navigate(['login']);
                    return false;        
                }
        });                                    
    }
}