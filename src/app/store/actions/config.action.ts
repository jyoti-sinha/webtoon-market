import { Action } from '@ngrx/store';
import { AppConfig } from '../../_core/models/app-config';

export const appConfigtype = 'GET_LOGGED_USER';

export class AppConfigAction implements Action {
  readonly type = appConfigtype;
  constructor(public payload: AppConfig){}
}

