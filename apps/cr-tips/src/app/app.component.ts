import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { RegisterDialogComponent } from './modules/auth/register-dialog/register-dialog.component';
import { AuthenticationState } from './modules/auth/+state/authentication.reducer';
import { Store, select } from '@ngrx/store';
import { LoginDialogComponent } from './modules/auth/login-dialog/login-dialog.component';
import { authenticationQuery } from './modules/auth/+state/authentication.selectors';

@Component({
  selector: 'cr-tips-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoginVisible = false;
  userLogged = false;


  constructor(private dialog: NzModalService, private store: Store<AuthenticationState>) {}

  ngOnInit() {
    this.store.pipe(select(authenticationQuery.getUser)).subscribe((user) => {
      if(user !== null) {
        this.userLogged = true;
      }
    });
  }


  showRegisterModal(): void {
    this.dialog.create({
      nzTitle: "Register",
      nzContent: RegisterDialogComponent,
      nzFooter: null,
      nzWidth: '650px'
    });
    //this.isRegisterVisible = true;
  }

  showLoginModal(): void {
    this.dialog.create({
      nzTitle: "Login",
      nzContent: LoginDialogComponent,
      nzFooter: null,
      nzWidth: "600px"
    });
    this.isLoginVisible = true;
  }

  handleLoginOk(): void {
    console.log('Button ok clicked!');
    this.isLoginVisible = false;
  }

  handleLoginCancel(): void {
    console.log('Button cancel clicked!');
    this.isLoginVisible = false;
  }



}

