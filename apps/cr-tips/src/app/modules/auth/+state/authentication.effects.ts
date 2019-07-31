import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import {
  AuthenticationActionTypes, Register, Registered
} from './authentication.actions';
import { UserService } from '../../../core/database/user.service';

import {switchMap, map} from 'rxjs/operators'

@Injectable()
export class AuthenticationEffects {
  @Effect() register$ = this.actions$.pipe(
    ofType<Register>(AuthenticationActionTypes.Register),
    switchMap((action) => {
      action.user.idUser = action.uid;
      action.user.password = action.user['checkPassword'] = null
      return this.userService.create(action.user);
    }),
    map(() =>new Registered())
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
