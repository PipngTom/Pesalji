import { Action } from '@ngrx/store';
import { Country } from '../country';

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const ALL_COUNTRIES_SUCCESS = "ALL_COUNTRIES_SUCCESS";
export const GET_BLOCK_COUNTRIES = "GET_BLOCK_COUNTRIES";
export const BLOCK_COUNTRIES_SUCCESS = "BLOCK_COUNTRIES_SUCCESS";
export const SINGLE_COUNTRY = "SINGLE_COUNTRY";
export const SINGLE_COUNTRY_SUCCESS = "SINGLE_COUNTRY_SUCCESS";
export const GET_BORDERS_COUNTRIES = "GET_BORDERS_COUNTRIES";
export const BORDERS_COUNTRIES_SUCCESS = 'BORDERS_COUNTRIES_SUCCESS';
export const FLUSH_BORDERS_COUNTRIES = "FLUSH_BORDERS_COUNTRIES";

export class GetAllCountries implements Action {
  readonly type = GET_ALL_COUNTRIES;
}

export class AllCountriesSuccess implements Action {
  readonly type = ALL_COUNTRIES_SUCCESS;

  constructor(public payload: Country[]) {
  }
}

export class GetBlockCountries implements Action {
  readonly type = GET_BLOCK_COUNTRIES;

  constructor(public payload: string) {}
}


export class BlockCountriesSuccess implements Action {
  readonly type = BLOCK_COUNTRIES_SUCCESS;

  constructor(public payload: Country[]) {}
}

export class SingleCountry implements Action {
  readonly type = SINGLE_COUNTRY;

  constructor(public payload: string) {}
}


export class SingleCountrySuccess implements Action {
  readonly type = SINGLE_COUNTRY_SUCCESS;

  constructor(public payload: Country) {}
}

export class GetBordersCountries implements Action {
  readonly type = GET_BORDERS_COUNTRIES;

  constructor(public payload: string) {}
}

export class BordersCountriesSuccess implements Action {
  readonly type = BORDERS_COUNTRIES_SUCCESS;

  constructor(public payload: Country) {}
}

export class FlushBordersCoutries implements Action {
  readonly type = FLUSH_BORDERS_COUNTRIES;
} 

export type AppActions = 
GetAllCountries | 
GetBlockCountries | 
AllCountriesSuccess |
BlockCountriesSuccess |
SingleCountry |
SingleCountrySuccess |
GetBordersCountries |
BordersCountriesSuccess |
FlushBordersCoutries;

