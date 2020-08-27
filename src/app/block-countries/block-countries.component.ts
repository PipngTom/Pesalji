import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../country';
import { Store, select } from '@ngrx/store';
import { getBlockCountries } from '../novi-store/store.selectors';


@Component({
  selector: 'app-block-countries',
  templateUrl: './block-countries.component.html',
  styleUrls: ['./block-countries.component.css']
})
export class BlockCountriesComponent implements OnInit {
  blockCountries$: Observable<Country[]>;
  


  constructor(
    private router: Router,
    private store: Store<any>) { 
  }

  ngOnInit(): void {
    this.blockCountries$ = this.store.pipe(
      select(getBlockCountries)
    )
  }


  onGetCountry(abb: string) {
    this.router.navigate(['/single-country'], {queryParams: {akron: abb}})
  }

  onFilter(event) {
     this.blockCountries$ = this.store.pipe(
       select(getBlockCountries),
       map((items: Country[]) => {
         return items.filter(
          (item: Country) => {
            return item.name.toUpperCase().includes(event.target.value.toUpperCase());
          }
         )
        })
     )
  }

}
