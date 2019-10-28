import { Injectable } from '@angular/core';
import { AppSettingsService } from '../database/app-settings.service';
import { AppSettingState } from './app-settings.reducer';
import { Store } from '@ngrx/store';
import { SetAppVersion } from './app-settings.action';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsFacade{

  constructor(private appSettingsService: AppSettingsService, private store: Store<AppSettingState>){}

  getAppVersion(){
    this.appSettingsService.getSettings().subscribe((settings) => {
      this.store.dispatch(new SetAppVersion(settings['version']))
    })
  }

}
