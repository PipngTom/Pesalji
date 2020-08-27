import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../country';
import { getAllCountries } from '../novi-store/store.selectors';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../novi-store/store.actions';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {
  countries$: Observable<Country[]>;

   
  constructor(private router: Router,
    private store: Store<any>) { 
    
  }

  ngOnInit() {
  this.store.dispatch(fromStore.GET_ALL_COUNTRIES());
  this.countries$ = this.store.pipe(
  select(getAllCountries)
   );
  }

  onFilter(event) {
    this.countries$ = this.store.pipe(
      select(getAllCountries),
      map((items: Country[]) => {
        return items.filter((item: Country) => {
          return item.name.toUpperCase().includes(event.target.value.toUpperCase());
        })
      }
    ))
  }

  onGetCountry(skr: string) {
    this.router.navigate(['/single-country'], {queryParams: {akron: skr}});
  }


}
