import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
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
import { tipReducer } from './pages/tips-page/+state/tips.reducer';
import { TipEffect } from './pages/tips-page/+state/tips.effect';
import { simulatorReducer } from './pages/simulator/+state/simulator.reducer';
import { SimulatorEffect } from './pages/simulator/+state/simulator.effect';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { appSettingsReducer } from './core/+state/app-settings.reducer';
import { AppSettingsFacade } from './core/+state/app-settings.facade';

registerLocaleData(en);
export function getSettings(facade:AppSettingsFacade) { return () => facade.getAppVersion();}


registerLocaleData(en);

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
    ClipboardModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('settings', appSettingsReducer),
    StoreModule.forFeature('auth', authenticationReducer),
    StoreModule.forFeature('tip', tipReducer),
    StoreModule.forFeature('simulator', simulatorReducer),
    !environment.production ? StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }): [],
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthenticationEffects, TipEffect, SimulatorEffect]),
    AuthModule],
  providers: [
    { provide: NZ_I18N, useValue: en_GB, multi: true },
    /*{provide: APP_INITIALIZER, useFactory: getSettings, deps:[AppSettingsFacade], multi: true}*/
  ],
  entryComponents: [RegisterDialogComponent, LoginDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
