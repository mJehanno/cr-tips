import { Action } from '@ngrx/store';
import { Tip, DisplayedTip } from '@cr-tips/data';

export enum TipsActionType {
  AddTipAction = "[Tip] Add Tip",
  AddedTipAction = "[Tip] Added Tip",
  GetAllTipAction = "[Tip] Get All Tips",
  GotAllTipAction = "[Tip] Got All Tips",
  DisplayingTipAction = "[Tip] Reformating Tip before display"
}


export class AddTipAction implements Action {
  readonly type = TipsActionType.AddTipAction;
  constructor(public tip: Tip){}

}

export class AddedTipAction implements Action {
  readonly type = TipsActionType.AddedTipAction;
}

export class GetAllTipAction implements Action {
  readonly type = TipsActionType.GetAllTipAction;
}

export class GotAllTipAction implements Action {
  readonly type = TipsActionType.GotAllTipAction;
  constructor(public tips: Tip[]){}
}

export class DisplayingTipAction implements Action {
  readonly type = TipsActionType.DisplayingTipAction;
  constructor(public tips: DisplayedTip[]){}
}

export type TipAction = AddTipAction | AddedTipAction | GetAllTipAction | GotAllTipAction | DisplayingTipAction;

