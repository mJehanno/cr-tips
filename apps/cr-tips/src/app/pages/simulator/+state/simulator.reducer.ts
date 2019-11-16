import { Hero, Combo } from '@cr-tips/data';
import { SimulatorAction, SimulatorActionType } from './simulator.action';
import * as _ from 'lodash';

export interface SimulatorState {
    selectedHeroes: Set<Hero>;
    combo: Combo;
    alreadyExist: boolean;
    totalCost: number;
}

export const initialSimulatorState: SimulatorState = {
    selectedHeroes: new Set(),
    alreadyExist: false,
    totalCost: 0,
    combo: {
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
        demonPunisher: 0,
        tank:0
    }
}

export function simulatorReducer(state: SimulatorState = initialSimulatorState,
    action: SimulatorAction){
        switch(action.type){
            case SimulatorActionType.AddHero:
                if(state.selectedHeroes.has(action.hero)){
                  state.alreadyExist = true;
                }else{
                  state.alreadyExist = false;
                  state.totalCost += action.hero.manaCost;
                }
                state.selectedHeroes.add(action.hero);

                return {...state, selectedHeroes : new Set([...state.selectedHeroes])};
            case SimulatorActionType.RemoveHero:
                state.totalCost -= action.hero.manaCost;
                state.selectedHeroes.delete(action.hero);
                return {...state, selectedHeroes: new Set([...state.selectedHeroes])};
            case SimulatorActionType.UpdateCombo:
              const obj ={};
                Object.keys(state.combo).map(function(a){
                  if(a !== 'demonPunisher'){
                    obj[a] = state.combo[a] + action.combo[a]
                  }else {
                    obj[a] = action.combo[a]
                  }
                });
                return {...state, combo: {...obj}};
            default:
                return {...state};
        }

    }

function sumProperties(objValue, srcValue) {
    return objValue + srcValue;
}
