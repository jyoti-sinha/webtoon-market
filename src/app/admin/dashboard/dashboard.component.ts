import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_core/services/user.service';

import { Store, select } from '@ngrx/store';

import { AppState } from '../../store/state/app.state';
import { selectUserList, selectSelectedUser } from '../../store/selectors/user.selector';
import * as actions from '../../store/actions/user.action';
import { Router } from '@angular/router';

import { AppConfigAction } from '../../store/actions/config.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));
  user$ = this._store.pipe(select(selectSelectedUser));
  loggeduser$ = this._store.pipe(select('loggedUser'));
  

  constructor(
    private userService: UserService, 
    private _store: Store<AppState>, 
    private _router: Router) { }

  

  ngOnInit() {
    this._store.dispatch(new actions.GetUsersAction());
  }

  toUser(id){
    this._store.dispatch(new actions.GetUserAction(id));
  }


}