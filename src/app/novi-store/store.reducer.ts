import { Country } from '../country';
import * as StoreActions from './store.actions';
import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';


export interface AppState {
  countries: Country [];
  blockCountries: Country [];
  code: string
}

const initialState: AppState = {
  countries: [],
  blockCountries: [],
  code: ''
}

const reducer = createReducer(
  initialState,
  on(StoreActions.ALL_COUNTRIES_SUCCESS, (state, {countries}) => {
    return {...state, countries }}),
  on(StoreActions.BLOCK_COUNTRIES_SUCCESS, (state, {blockCountries}) => {
    return {...state, blockCountries }}),
  on(StoreActions.SET_ALPHACODE, (state, {code}) => {
    return {...state, code}
  })
)

export function storeReducer(state: AppState | undefined, action: Action) {
  return reducer(state, action);
}

export const appFeatureKey = 'app';