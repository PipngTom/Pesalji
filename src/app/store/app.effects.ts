import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AppActions from './app.actions';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { Country } from '../country';



@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  fetchCountries = this.actions$.pipe(
    ofType(AppActions.GET_ALL_COUNTRIES),
    switchMap(() => {
      return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
    }),
    map(countries => {
      return new AppActions.AllCountriesSuccess(countries);
    })
  )

  @Effect()
  fetchBlockCountries = this.actions$.pipe(
    ofType(AppActions.GET_BLOCK_COUNTRIES),
    switchMap(({payload, type}) => {
      return this.http.get<Country[]>('https://restcountries.eu/rest/v2/regionalbloc/' + payload);
    }),
    map(blockCountries => {
      return new AppActions.BlockCountriesSuccess(blockCountries);
    })
  )

  @Effect()
  fetchSingleCountries = this.actions$.pipe(
    ofType(AppActions.SINGLE_COUNTRY),
    switchMap((action: AppActions.SingleCountry) => {
      return this.http.get<Country>('https://restcountries.eu/rest/v2/alpha/' + action.payload);
    }),
    map(singleCountry => {
      return new AppActions.SingleCountrySuccess(singleCountry);
    })
  )

  @Effect()
  fetchBorder = this.actions$.pipe(
    ofType(AppActions.GET_BORDERS_COUNTRIES),
    mergeMap((action: AppActions.GetBordersCountries) => {
      return this.http.get<Country>('https://restcountries.eu/rest/v2/alpha/' + action.payload);
    }),
    map(borderCountries => {
      console.log(borderCountries);
      return new AppActions.BordersCountriesSuccess(borderCountries);
    })
  )

}