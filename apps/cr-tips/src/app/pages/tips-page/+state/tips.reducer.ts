import { Tip, DisplayedTip } from '@cr-tips/data';
import { TipAction, TipsActionType } from './tips.action';
import { elementAt } from 'rxjs/operators';

export interface TipState{
  tips: Tip[];
  gotTipsFromDb: boolean;
  displayedTip: DisplayedTip[];
}

export const initialTipState: TipState = {
  tips : [],
  displayedTip: [],
  gotTipsFromDb: false
}

export function tipReducer(state: TipState = initialTipState,
  action: TipAction){
    switch(action.type) {
      case TipsActionType.AddTipAction:
        console.log(action)
        return {...state, tips: [...state.tips, action['tip']]}
      case TipsActionType.GotAllTipAction:
        return {...state, tips: action.tips, gotTipsFromDb: true}
      case TipsActionType.DisplayingTipAction:
        console.log(action.tips)
        return {...state, displayedTip: action.tips}
        default:
          return state;
    }

}
