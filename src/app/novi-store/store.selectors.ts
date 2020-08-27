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

export const getSingleCountry = createSelector(
  selectAppState, (state: fromApp.AppState) => {
    return state.countries.find(item => {
      return item.alpha3Code === state.code
    })
  }
);

export const getBorderCountries = createSelector(
  selectAppState, (state: fromApp.AppState) => {
    let singleCountry = state.countries.find(item => {
      return item.alpha3Code === state.code
    })
     return state.countries.filter(item => {
      return singleCountry.borders.includes(item.alpha3Code)
    })
  }
);