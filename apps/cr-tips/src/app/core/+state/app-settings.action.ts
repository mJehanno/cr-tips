import { Action } from '@ngrx/store';

export enum AppSettingsActionType {
  SetAppVersion = '[Settings] Set App Version',
}

export class SetAppVersion implements Action {
  readonly type = AppSettingsActionType.SetAppVersion;
  constructor(public version: string) {}
}

export type AppSettingsAction = SetAppVersion
