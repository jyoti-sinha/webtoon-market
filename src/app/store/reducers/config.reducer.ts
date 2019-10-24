import { AppConfigAction, appConfigtype } from '../actions/config.action';
import { initialConfigState } from '../state/config.state';
import { AppConfig } from '../../_core/models/app-config';


export const ConfigReducer = (
  state = initialConfigState,
  action: AppConfigAction
) => {
  switch(action.type){
    case appConfigtype: {
      state = action.payload
      return {
        ...state,
        loggedUser: action.payload
      }
    }

    default: {
      return state
    }
  }
}

