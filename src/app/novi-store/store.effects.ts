import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Country } from '../country';
import * as fromStore from '../novi-store/store.actions';




@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  fetchCountries = this.actions$.pipe(
    ofType(fromStore.GET_ALL_COUNTRIES),
    switchMap(() => {
      return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
    }),
    map((countries: Country[] )=> {
      return fromStore.ALL_COUNTRIES_SUCCESS({countries});
    })
  )

  @Effect()
  fetchBlockCountries = this.actions$.pipe(
    ofType(fromStore.GET_BLOCK_COUNTRIES),
    switchMap((payload: {abb: string}) => {
      return this.http.get<Country[]>('https://restcountries.eu/rest/v2/regionalbloc/' + payload.abb);
    }),
    map((blockCountries: Country[]) => {
      return fromStore.BLOCK_COUNTRIES_SUCCESS({blockCountries});
    })
  )

}