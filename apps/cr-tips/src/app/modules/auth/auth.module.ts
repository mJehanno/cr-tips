import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterDialogComponent, LoginDialogComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  exports: [RegisterDialogComponent, LoginDialogComponent]
})
export class AuthModule { }
