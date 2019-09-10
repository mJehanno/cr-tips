import { Action } from '@ngrx/store';
import { User } from '@cr-tips/data';

export enum AuthenticationActionTypes {
  Register = '[Authentication] Load Authentication',
  Login = '[Authentication] Authentication Loaded',
  Logout = '[Authentication] Authentication Load Error',
  Registered = '[Authentication] Authentication Load Error',
  Logged = '[Authentication] Logged',
  RegisterFormSubmit = '[Authentication] Register Form Submitted',
  LoginFormSubmit = '[Authentication] Login Form Submitted'
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

export class Logged implements Action {
  readonly type = AuthenticationActionTypes.Logged;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.Logout;
}

export class RegisterFormSubmit implements Action {
  readonly type = AuthenticationActionTypes.RegisterFormSubmit;
}

export class LoginFormSubmit implements Action {
  readonly type = AuthenticationActionTypes.LoginFormSubmit;
}

export type AuthenticationAction =
  | Register
  | Login
  | Logged
  | Logout
  | Registered
  | RegisterFormSubmit
  | LoginFormSubmit
  ;


