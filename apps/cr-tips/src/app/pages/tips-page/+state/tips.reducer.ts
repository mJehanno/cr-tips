import { Tip, DisplayedTip } from '@cr-tips/data';
import { TipAction, TipsActionType } from './tips.action';
import { elementAt } from 'rxjs/operators';

export interface TipState{
  tips: Tip[];
  gotTipsFromDb: boolean;
  displayedTip: DisplayedTip[];
  selectedTip: DisplayedTip;
}

export const initialTipState: TipState = {
  tips : [],
  displayedTip: [{authorUser: {email:''}, date: new Date(), content: '', score: 0,  title: ''}],
  gotTipsFromDb: false,
  selectedTip: {authorUser: {email:''}, date: new Date(), content: '', score: 0,  title: ''}
}

export function tipReducer(state: TipState = initialTipState,
  action: TipAction){
    switch(action.type) {
      case TipsActionType.AddTipAction:
        console.log(action)
        return {...state, tips: [...state.tips, action['tip']]}
      case TipsActionType.GotAllTipAction:
        console.log(action.payload);
        return {...state, displayedTip: action.payload}
      case TipsActionType.DisplayingTipAction:
        console.log(action.tips)
        return {...state, displayedTip: action.tips}
      case TipsActionType.GotDetailTipAction:
          return {...state, selectedTip: action.tip}
        default:
          return state;
    }

}
