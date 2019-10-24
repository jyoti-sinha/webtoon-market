import { UserActions, UserActiontype } from '../actions/user.action';
import { initialUserState, UserState } from '../state/user.state';

export const UserReducer = (
  state = initialUserState,
  action: UserActions
): UserState => {
  switch(action.type){
    case UserActiontype.getUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }
    case UserActiontype.getUsersSuccess: { 
      return {
        ...state,
        users: action.payload
      }
    }

    default: {
      return state
    }
  }
}

