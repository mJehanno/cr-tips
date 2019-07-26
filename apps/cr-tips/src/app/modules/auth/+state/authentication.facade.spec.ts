import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { AuthenticationEffects } from './authentication.effects';
import { AuthenticationFacade } from './authentication.facade';

import { authenticationQuery } from './authentication.selectors';
import {
  LoadAuthentication,
  AuthenticationLoaded
} from './authentication.actions';
import {
  AuthenticationState,
  Entity,
  initialState,
  authenticationReducer
} from './authentication.reducer';

interface TestSchema {
  authentication: AuthenticationState;
}

describe('AuthenticationFacade', () => {
  let facade: AuthenticationFacade;
  let store: Store<TestSchema>;
  let createAuthentication;

  beforeEach(() => {
    createAuthentication = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('authentication', authenticationReducer, {
            initialState
          }),
          EffectsModule.forFeature([AuthenticationEffects])
        ],
        providers: [AuthenticationFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(AuthenticationFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allAuthentication$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allAuthentication$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `AuthenticationLoaded` to manually submit list for state management
     */
    it('allAuthentication$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allAuthentication$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new AuthenticationLoaded([
            createAuthentication('AAA'),
            createAuthentication('BBB')
          ])
        );

        list = await readFirst(facade.allAuthentication$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
