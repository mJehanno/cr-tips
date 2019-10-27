import { AppSettingState } from "./app-settings.reducer";
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAppSettingState = createFeatureSelector<AppSettingState>('settings');

const getVersion = createSelector(
  getAppSettingState,
  (state: AppSettingState) => state ? state.version : '0.0.0'
);

export const AppSettingQuery = {
  getVersion
}
