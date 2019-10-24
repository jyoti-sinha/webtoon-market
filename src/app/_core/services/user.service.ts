import { Injectable } from '@angular/core';
import db from '../../config/database';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppUser } from '../models/app-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserList():Observable<any> {
    return from(db.users.toArray())
  }

  getUser(userId: Number):Observable<any> {
    return from(db.users.get(userId))
  }

}