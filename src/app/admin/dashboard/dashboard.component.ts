import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_core/services/user.service';

import { Store, select } from '@ngrx/store';

import { AppState } from '../../store/state/app.state';
import { selectUserList, selectSelectedUser } from '../../store/selectors/user.selector';
import * as actions from '../../store/actions/user.action';
import { Router } from '@angular/router';

import { AppConfigAction } from '../../store/actions/config.action';

import { UserStoreService } from '../../_core/services/user/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //users$ = this._store.pipe(select(selectUserList));
  user$ = this._store.pipe(select(selectSelectedUser));
  loggeduser$ = this._store.pipe(select('loggedUser'));
  users = [];

  constructor(
    private userService: UserService, 
    private _store: Store<AppState>, 
    private _router: Router,
    private userStore: UserStoreService) { }

  

  ngOnInit() {
    //this._store.dispatch(new actions.GetUsersAction());
    this.userStore.loadUsers()
    this.userStore.state$.subscribe(res => {
      this.users = res.users;
    })  

    
  }

  addU() {
    this.userStore.addUser({
      id: 1,
      name: 'fdgdf',
      email: 'fdgfdg@fd.com',
      role: '1',
      active: '0'
    })
  }

  toUser(id){
    //this._store.dispatch(new actions.GetUserAction(id));
    console.log(id)
  }


}