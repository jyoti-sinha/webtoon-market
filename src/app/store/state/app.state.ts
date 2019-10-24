import { RouterReducerState } from '@ngrx/router-store';
import { UserState, initialUserState } from './user.state';

import { AppConfig } from '../../_core/models/app-config';
import { initialConfigState } from './config.state';




export interface AppState {
  router?: RouterReducerState;
  users: UserState;
  loggedUser: AppConfig;
}

export const initialAppState: AppState = {
  users: initialUserState,
  loggedUser: initialConfigState
};

export function getInitialState(): AppState {
  return initialAppState;
}
