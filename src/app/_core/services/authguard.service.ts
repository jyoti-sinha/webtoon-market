import { Injectable } from '@angular/core';
import { 
  Router, 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
  } from '@angular/router';
import db from '../config/database';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean { 
    let user = JSON.parse(window.localStorage.getItem('user'));
    if(user){
      if(user.role === '1'){        
        return true;
      }
    }
    
    this.router.navigate(['']);
    return false;
  }

}