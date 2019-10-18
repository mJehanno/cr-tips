import { Action } from '@ngrx/store';
import { Hero, Combo } from '@cr-tips/data';

export enum SimulatorActionType {
  AddHero = "[Simulator] Add Hero",
  RemoveHero = "[Simulator] Remove Hero",
  UpdateCombo = "[Simulator] Update Combo",
}


export class AddHeroAction implements Action {
  readonly type = SimulatorActionType.AddHero;
  constructor(public hero: Hero){}

}

export class RemoveHeroAction implements Action {
  readonly type = SimulatorActionType.RemoveHero;
  constructor(public hero: Hero){}
}

export class UpdateComboAction implements Action {
  readonly type = SimulatorActionType.UpdateCombo;
  constructor(public combo: Combo){}
}




export type SimulatorAction = AddHeroAction 
| RemoveHeroAction
| UpdateComboAction;

