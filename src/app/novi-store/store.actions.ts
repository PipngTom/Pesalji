import { createAction, props} from '@ngrx/store';
import { Country } from '../country';

export const GET_ALL_COUNTRIES = createAction(
  "GET_ALL_COUNTRIES"
)

export const ALL_COUNTRIES_SUCCESS = createAction(
  "ALL_COUNTRIES_SUCCESS",
  props<{countries: Country[]}>())

export const GET_BLOCK_COUNTRIES = createAction(
  "GET_BLOCK_COUNTRIES",
  props<{abb: string}>())

export const BLOCK_COUNTRIES_SUCCESS = createAction(
  "BLOCK_COUNTRIES_SUCCESS",
  props<{blockCountries: Country[]}>())

