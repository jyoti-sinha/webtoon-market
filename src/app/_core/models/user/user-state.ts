import { User } from './user';

export interface UserState {
  users: User[]
}

export const initialState:UserState = {
  users: []
}