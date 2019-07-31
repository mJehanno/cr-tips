import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_GB } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AuthModule } from './modules/auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { authenticationReducer } from './modules/auth/+state/authentication.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './modules/auth/+state/authentication.effects';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegisterDialogComponent } from './modules/auth/register-dialog/register-dialog.component';
import { LoginDialogComponent } from './modules/auth/login-dialog/login-dialog.component';
import { localStorageSync } from 'ngrx-store-localstorage';
import { tipReducer } from './pages/tips-page/+state/tips.reducer';
import { TipEffect } from './pages/tips-page/+state/tips.effect';

registerLocaleData(en);

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['auth'], rehydrate: true})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot({}, {metaReducers}),
    StoreModule.forFeature('auth', authenticationReducer),
    StoreModule.forFeature('tip', tipReducer),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthenticationEffects, TipEffect]),
    AuthModule],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
