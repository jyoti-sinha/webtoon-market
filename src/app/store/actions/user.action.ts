import { Action } from '@ngrx/store';
import { AppUser } from '../../_core/models/app-user';

export enum UserActiontype {
  getUser = 'GET_USER',
  getUserSuccess = 'GET_USER_SUCCESS',
  getUsers = 'GET_USERS',
  getUsersSuccess = 'GET_USERS_SUCCESS'
}

export class GetUserAction implements Action {
  readonly type = UserActiontype.getUser;
  constructor(public payload: Number){}
}

export class GetUserSuccessAction implements Action {
  readonly type = UserActiontype.getUserSuccess;
  constructor(public payload: AppUser){}
}

export class GetUsersAction implements Action {
  readonly type = UserActiontype.getUsers;  
}

export class GetUsersSuccessAction implements Action {
  readonly type = UserActiontype.getUsersSuccess;
  constructor(public payload: AppUser[]){}
}


export type UserActions = GetUserAction | GetUserSuccessAction | GetUsersAction | GetUsersSuccessAction;
