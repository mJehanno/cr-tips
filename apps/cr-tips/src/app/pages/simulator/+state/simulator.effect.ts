import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AddHeroAction, RemoveHeroAction, SimulatorActionType, UpdateComboAction } from './simulator.action';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as _ from 'lodash';
import { SimulatorState } from './simulator.reducer';
import { Store } from '@ngrx/store';
import { SimulatorQuery } from './simulator.selector';

@Injectable()
export class SimulatorEffect {

    constructor(private actions$: Actions, private store: Store<SimulatorState>){}

    @Effect() addHero$ = this.actions$.pipe(
        ofType<AddHeroAction>(SimulatorActionType.AddHero),
        withLatestFrom(this.store.select(SimulatorQuery.getSimulatorCondition), this.store.select(SimulatorQuery.getSimulatorCombo)),
        switchMap(([action, condition, stateCombo]) => {
            const combo = {
              elf: 0,
              human: 0,
              beast: 0,
              jelly: 0,
              undead: 0,
              oceanborn: 0,
              demon: 0,
              goblin: 0,
              furry: 0,
              cyborg: 0,
              void: 0,
              dragon: 0,
              sorcerer: 0,
              assassin: 0,
              warlock: 0,
              rider: 0,
              hunter: 0,
              engineer: 0,
              punisher: 0,
              warrior: 0,
              druid: 0,
              demonPunisher: 0
            };
            if(!condition){
              action.hero.classes.map((elem) => {
                combo[_.lowerCase(elem)] = 1;
              });
              action.hero.race.map((elem) => {
                combo[_.lowerCase(elem)] = 1;
              });

              const newCombo = sumObjectsByKey(combo, stateCombo)
              if(newCombo.punisher >= 2) {
                if(newCombo.demon >= 1) {
                  console.log(newCombo.demon);
                  combo['demonPunisher'] = newCombo.demon -1;
                  console.log(newCombo.demon -1)
                }
              }
            }
         ;
            return of(combo);
        }),
        map((combo) =>new UpdateComboAction(combo))
    );

    @Effect() removeHero$ = this.actions$.pipe(
        ofType<RemoveHeroAction>(SimulatorActionType.RemoveHero),
        withLatestFrom(this.store.select(SimulatorQuery.getSimulatorCombo)),
        switchMap(([action, stateCombo]) => {
            const combo = {
              elf: 0,
              human: 0,
              beast: 0,
              jelly: 0,
              undead: 0,
              oceanborn: 0,
              demon: 0,
              goblin: 0,
              furry: 0,
              cyborg: 0,
              void: 0,
              dragon: 0,
              sorcerer: 0,
              assassin: 0,
              warlock: 0,
              rider: 0,
              hunter: 0,
              engineer: 0,
              punisher: 0,
              warrior: 0,
              druid: 0,
              demonPunisher: 0
            };
            action.hero.classes.map((elem) => {
                combo[_.lowerCase(elem)] = -1;
            });
            action.hero.race.map((elem) => {
                combo[_.lowerCase(elem)] = -1;
            });
            const newCombo = sumObjectsByKey(combo, stateCombo)
            if(newCombo.punisher >= 2) {
              if(newCombo.demon >= 1) {
                console.log(newCombo.demon);
                combo['demonPunisher'] = newCombo.demon -1;
                console.log(newCombo.demon -1)
              }
            }
            return of(combo);
        }),
        map((combo) =>new UpdateComboAction(combo))
    );
}

function sumObjectsByKey(...objs) {
  return objs.reduce((a, b) => {
    for (const k in b) {
      if (b.hasOwnProperty(k))
        a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
}
