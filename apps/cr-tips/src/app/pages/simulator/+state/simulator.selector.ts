import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SimulatorState } from './simulator.reducer';

const getSimulatorState = createFeatureSelector<SimulatorState>('simulator');

const getSimulatorSelectedHeroes = createSelector(getSimulatorState, (state: SimulatorState) => state.selectedHeroes)

const getSimulatorCombo = createSelector(getSimulatorState, (state: SimulatorState) => state.combo);

const getSimulatorCondition = createSelector(getSimulatorState, (state: SimulatorState) => state.alreadyExist);

const getSimulatorCost = createSelector(getSimulatorState, (state: SimulatorState) => state.totalCost);

export const SimulatorQuery = {
    getSimulatorSelectedHeroes,
    getSimulatorCombo,
    getSimulatorCondition,
    getSimulatorCost
  }
