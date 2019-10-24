import { AppUser } from '../../_core/models/app-user';

export interface UserState {
  users: AppUser[],
  selectedUser: AppUser
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null
}

export function getInitialState(): UserState {
  return initialUserState;
}