import { createSelector } from '@ngrx/store';

import { UserState } from '../state/user.state';
import { AppState } from '../state/app.state';


export const selectUser = (state: AppState) => state.users;

export const selectUserList = createSelector(
  selectUser,
  (state: UserState) => state.users
)

export const selectSelectedUser = createSelector(
  selectUser,
  (state: UserState) => state.selectedUser
)

