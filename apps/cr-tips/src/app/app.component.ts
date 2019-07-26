import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { RegisterDialogComponent } from './modules/auth/register-dialog/register-dialog.component';
import { AuthenticationState } from './modules/auth/+state/authentication.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cr-tips-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  isRegisterVisible = false;
  isLoginVisible = false


  constructor(private dialog: NzModalService, private store: Store<AuthenticationState>) {}

  showRegisterModal(): void {
    this.dialog.create({
      nzTitle: "Login",
      nzContent: RegisterDialogComponent,
      nzFooter: null,
      nzWidth: '650px'
    });
    //this.isRegisterVisible = true;
  }

  showLoginModal(): void {
    this.isLoginVisible = true;
  }


  handleRegisterOk(): void {
    console.log('Button ok clicked!');
    this.isRegisterVisible = false;
  }

  handleRegisterCancel(): void {
    console.log('Button cancel clicked!');
    this.isRegisterVisible = false;
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

