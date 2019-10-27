import { AppSettingsAction, AppSettingsActionType } from './app-settings.action';
import { version } from 'punycode';

export interface AppSettingState {
  version: string;
}

export const initialState = {
  version: '0.0.0'
}

export function appSettingsReducer(state: AppSettingState = initialState,
  action: AppSettingsAction) {
    switch (action.type) {
      case AppSettingsActionType.SetAppVersion:
        return {...state, version: action.version};
      default:
        break;
    }

}

