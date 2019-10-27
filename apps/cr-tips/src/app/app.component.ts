import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { RegisterDialogComponent } from './modules/auth/register-dialog/register-dialog.component';
import { AuthenticationState } from './modules/auth/+state/authentication.reducer';
import { Store, select } from '@ngrx/store';
import { LoginDialogComponent } from './modules/auth/login-dialog/login-dialog.component';
import { authenticationQuery } from './modules/auth/+state/authentication.selectors';
import { AuthenticationFacade } from './modules/auth/+state/authentication.facade';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppSettingState } from './core/+state/app-settings.reducer';
import { AppSettingQuery } from './core/+state/app-settings.selector';

@Component({
  selector: 'cr-tips-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  userLogged = false;
  version;
  constructor(private dialog: NzModalService, public afAuth: AngularFireAuth,private authFacade: AuthenticationFacade, private store: Store<AppSettingState>) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((state) => { // Should probably move that to selector and get that here from state.
      this.userLogged = state ? true : false;
    });
    this.version = this.store.pipe(select(AppSettingQuery.getVersion));
  }


  showRegisterModal(): void {
    this.dialog.create({
      nzTitle: "Register",
      nzContent: RegisterDialogComponent,
      nzFooter: null,
      nzWidth: '650px',
      nzClosable: true,
      nzMaskClosable: false,
      nzOnCancel: (instance) => {
        if (instance.validateForm.untouched){
          return false;
        }
      }
    });
  }

  showLoginModal(): void {
    this.dialog.create({
      nzTitle: "Login",
      nzContent: LoginDialogComponent,
      nzFooter: null,
      nzWidth: "600px",
      nzMaskClosable: false,
      nzClosable: true,
      nzKeyboard: false,
      nzOnCancel: (instance) => {
        if (instance.validateForm.untouched){
          return false;
        }
      }
    })
  }

  logout() {
    this.authFacade.logout();
  }

}

