import {
  AuthenticationAction,
  AuthenticationActionTypes
} from './authentication.actions';
import { User } from '@cr-tips/data';

export const AUTHENTICATION_FEATURE_KEY = 'authentication';

/**
 * Interface for the 'Authentication' data used in
 *  - AuthenticationState, and
 *  - authenticationReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AuthenticationState {
  user: User; // list of Authentication; analogous to a sql normalized table
  selectedId?: string | number; // which Authentication record has been selected
  loaded: boolean; // has the Authentication list been loaded
  error?: any; // last none error (if any)
}

export interface AuthenticationPartialState {
  readonly [AUTHENTICATION_FEATURE_KEY]: AuthenticationState;
}

export const initialState: AuthenticationState = {
  user: null,
  loaded: false
};

export function authenticationReducer(
  state: AuthenticationState = initialState,
  action: AuthenticationAction
): AuthenticationState {
  switch (action.type) {

    case AuthenticationActionTypes.Logged:
      return {...state, user : action.payload}
    break;
    case AuthenticationActionTypes.Logout:
      return {...state, user: null}
    default:
      return state;

  }
  return state;
}
