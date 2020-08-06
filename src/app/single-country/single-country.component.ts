import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../country';
import { Store, select } from '@ngrx/store';
import { getAllCountries } from '../novi-store/store.selectors';
import * as fromStore from '../novi-store/store.actions';



@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})

export class SingleCountryComponent implements OnInit {
  skr: string;
  borders = [];
  country$: Observable<Country>;
  dataSource = new MatTableDataSource<Country>();
  displayedColumns = ['name', 'population', 'acr' ,'details'];
  bordersCountries$: Observable<Country[]>;

  constructor(private route: ActivatedRoute, private router: Router,
    private store: Store<any>) {
    this.skr = this.route.snapshot.queryParamMap.get('akron');
    }

  ngOnInit(): void {
    this.store.dispatch(fromStore.GET_ALL_COUNTRIES());
    this.country$ = this.store.pipe(
      select(getAllCountries),
      map(
        (items: Country[]) => {
          let a: Country;
          a = items.find(
            (item: Country) => {
              return item.alpha3Code === this.skr;
            }
          );
          if (a) {
            this.borders = a.borders;
          }
          return a;
        }
      )
    )
    this.fillBordersCountries();
  }

  onGetCountry(abb: string) {
     this.router.navigate(['/single-country'] ,{queryParams: {akron: abb}})
     .then(
      () => {
        window.location.reload();
      }
     )
  }

  fillBordersCountries() {
    this.bordersCountries$ = this.store.pipe(
      select(getAllCountries),
      map(
        (items: Country[]) => {
          return items.filter(
            (item: Country) => {
              return this.borders.includes(item.alpha3Code);
            }
          )
        }
      )
    )
  }

}
