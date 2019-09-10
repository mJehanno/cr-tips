import {
  AuthenticationAction,
  AuthenticationActionTypes
} from './authentication.actions';
import { User } from '@cr-tips/data';



/**
 * Interface for the 'Authentication' data used in
 *  - AuthenticationState, and
 *  - authenticationReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */

export interface AuthenticationState {
  user: User; // list of Authentication; analogous to a sql normalized table
  selectedId?: string | number; // which Authentication record has been selected
  loaded: boolean; // has the Authentication list been loaded
  error?: any; // last none error (if any)
  loginSubmitted?: boolean;
  registerSubmitted?: boolean;
}

export const initialState: AuthenticationState = {
  user: null,
  loaded: false,
  loginSubmitted: false,
  registerSubmitted: false
};

export function authenticationReducer(
  state: AuthenticationState = initialState,
  action: AuthenticationAction
): AuthenticationState {
  switch (action.type) {

    case AuthenticationActionTypes.Logged:
      return {...state, user : action.payload}
    case AuthenticationActionTypes.Logout:
      return {...state, user: null, loginSubmitted: false, registerSubmitted: false}
    case AuthenticationActionTypes.RegisterFormSubmit:
      return {...state, registerSubmitted: true}
    case AuthenticationActionTypes.LoginFormSubmit:
      return {...state, loginSubmitted: true}
    default:
      return state;

  }
  return state;
}
