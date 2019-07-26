import { Action } from '@ngrx/store';
import { Entity } from './authentication.reducer';
import { User } from '@cr-tips/data';

export enum AuthenticationActionTypes {
  Register = '[Authentication] Load Authentication',
  Login = '[Authentication] Authentication Loaded',
  Logout = '[Authentication] Authentication Load Error',
  Registered = '[Authentication] Authentication Load Error'
}

export class Register implements Action {
  readonly type = AuthenticationActionTypes.Register;
  constructor(public uid: string,public user: User) {}
}

export class Registered implements Action {
  readonly type = AuthenticationActionTypes.Registered;
}

export class Login implements Action {
  readonly type = AuthenticationActionTypes.Login;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.Logout;
  constructor(public payload: Entity[]) {}
}

export type AuthenticationAction =
  | Register
  | Login
  | Logout;

export const fromAuthenticationActions = {
  Register,
  Login,
  Logout
};
