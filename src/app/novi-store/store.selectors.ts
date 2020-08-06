import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromApp from './store.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>('app')

export const getAllCountries = createSelector(
  selectAppState, (state: fromApp.AppState) => {
    return state.countries
  }
);

export const getBlockCountries = createSelector(
  selectAppState, (state: fromApp.AppState) => {
    return state.blockCountries
  }
);