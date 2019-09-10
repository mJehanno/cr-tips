import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AuthenticationState
} from './authentication.reducer';

// Lookup the 'Authentication' feature state managed by NgRx
const getAuthenticationState = createFeatureSelector<AuthenticationState>('auth');

const getLoaded = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.loaded
);
const getError = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.error
);

const getSelectedId = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.selectedId
);

const getLoginSubmitted = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.loginSubmitted
)

const getRegisterSubmitted = createSelector(
  getAuthenticationState,
  (state: AuthenticationState) => state.registerSubmitted
)

const getUser = createSelector(getAuthenticationState, (state) => {
  return state.user;
})

export const authenticationQuery = {
  getLoaded,
  getError,
  getUser
};
