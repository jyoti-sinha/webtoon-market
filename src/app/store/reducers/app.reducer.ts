import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { UserReducer } from './user.reducer';
import { ConfigReducer } from './config.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  users: UserReducer,
  loggedUser: ConfigReducer
};