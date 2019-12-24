import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import db from '../../../config/database';

import { Store } from '../../../subject-store/store';
import { UserState, initialState } from '../../models/user/user-state';
import { User } from '../../models/user/user-stat';

@Injectable()
export class UserStoreService extends Store<UserState> {

  constructor() {
    super(initialState);
  }

  loadUsers(): void{
    db.users.toArray((data) => {
      this.addUser(data)
    })
  }

  addUser(user: User): void{
    const newSate = {
      ...this.state,
      users: [].concat(this.state.users, user)
    }
    this.setState(newSate);
  }

}