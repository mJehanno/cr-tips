import { TipState } from "./tips.reducer";
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getTipState = createFeatureSelector<TipState>('tip');

const getTips = createSelector(getTipState, (state: TipState) => {
  return state.tips;
})

const getDisplayedTips = createSelector(getTipState, (state: TipState) => {
  return state.displayedTip;
})

const getSelectedTips = createSelector(getTipState, (state: TipState) => state.selectedTip)

export const tipQuery = {
  getTips,
  getDisplayedTips,
  getSelectedTips
}
