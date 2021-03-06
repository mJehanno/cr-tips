import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { NgZorroAntdModule, NzIconModule } from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as authenticationInitialState,
  authenticationReducer
} from './+state/authentication.reducer';
import { AuthenticationEffects } from './+state/authentication.effects';
import { AuthenticationFacade } from './+state/authentication.facade';

@NgModule({
  declarations: [RegisterDialogComponent, LoginDialogComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzIconModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authenticationReducer, {
      initialState: authenticationInitialState
    }),
    EffectsModule.forFeature([AuthenticationEffects])
  ],
  exports: [RegisterDialogComponent, LoginDialogComponent],
  providers: [AuthenticationFacade]
})
export class AuthModule {}
