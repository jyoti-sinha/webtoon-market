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
export class LoginguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean { 
    let user = JSON.parse(window.localStorage.getItem('user'));
    if(user){
      if(user.role === '1'){
        this.router.navigate(['admin'])
        return false;
      }else if(user.role === '2'){
        this.router.navigate([''])
        return false;
      }
      
    }
    return true;
  }

}
