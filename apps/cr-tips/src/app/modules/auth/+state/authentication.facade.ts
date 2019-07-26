import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { select, Store } from '@ngrx/store';

import { AuthenticationPartialState } from './authentication.reducer';
import { authenticationQuery } from './authentication.selectors';
import { Register, Logged, Logout } from './authentication.actions';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '@cr-tips/data';

@Injectable()
export class AuthenticationFacade {


  constructor(private store: Store<AuthenticationPartialState>, private af: AngularFireAuth) {}


  public register(user: User): Observable<any> {

        return from(this.af.auth.createUserWithEmailAndPassword(user.email, user.password)).pipe(
          tap(a => {
            this.store.dispatch(new Register(a.user.uid, user));
          })
        );
  }

  public login(user: User): Promise<any> {
    return this.af.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  public userLogged(user: User){
    this.store.dispatch(new Logged(user) )
  }

  public logout() {
    this.store.dispatch(new Logout());
  }

}
