import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthenticationState } from '../../modules/auth/+state/authentication.reducer';
import { User } from '@cr-tips/data';
import { authenticationQuery } from '../../modules/auth/+state/authentication.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  currentUser: User = null;

  constructor(private store: Store<AuthenticationState>,  private router: Router){
    this.store.pipe(select(authenticationQuery.getUser)).subscribe((data) => {
      this.currentUser = data;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.currentUser === null || this.currentUser === undefined) {
        this.router.navigate(['/tips'])
        return false;
      }

    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
