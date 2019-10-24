import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { of } from 'rxjs';
import { switchMap, map, withLatestFrom,   } from 'rxjs/operators';

import { AppConfig } from '../../_core/models/app-config';
import { AppUser } from '../../_core/models/app-user';
import { UserService } from '../../_core/services/user.service';

import * as actions from '../actions/user.action';
import { selectUserList } from '../selectors/user.selector';



@Injectable()
export class UserEffectClass {
  @Effect()
  getUsers$ = this._action$.pipe(
    ofType<actions.GetUsersAction>(actions.UserActiontype.getUsers),
    switchMap(() => this.user_service.getUserList()),
    switchMap((users: AppUser[]) => of(new actions.GetUsersSuccessAction(users)))
  )

  @Effect()
  getUser$ = this._action$.pipe(
    ofType<actions.GetUserAction>(actions.UserActiontype.getUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new actions.GetUserSuccessAction(selectedUser));
    })
  )



  constructor(
    private _action$: Actions,
    private _store: Store<AppConfig>,
    private user_service: UserService
  ){}
}