import { Country } from '../country';
import * as AppActions from './app.actions';


export interface State {
  countries: Country [];
  blockCountries: Country [];
  singleCountry: Country;
  bordersCountries: Country[];
}

const initialState: State = {
  countries: [],
  blockCountries: [],
  singleCountry: null,
  bordersCountries: []
}

export function appReducer(state = initialState, action: AppActions.AppActions) {
  
  switch (action.type) {
    case AppActions.ALL_COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload
    }
    case AppActions.BLOCK_COUNTRIES_SUCCESS:
      return {
        ...state,
        blockCountries: action.payload
      }
    case AppActions.SINGLE_COUNTRY_SUCCESS:
      return {
        ...state,
        singleCountry: action.payload
      }
    case AppActions.BORDERS_COUNTRIES_SUCCESS:
      console.log(state.bordersCountries)
      return {
        ...state,
        bordersCountries: [...state.bordersCountries, action.payload]
      }
    case AppActions.FLUSH_BORDERS_COUNTRIES:
      return {
        ...state,
        bordersCountries: []
      }
    default:
      return state;
  }
}