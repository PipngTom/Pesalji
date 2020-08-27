import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Country } from '../country';
import { Store, select } from '@ngrx/store';
import { getSingleCountry, getBorderCountries } from '../novi-store/store.selectors';
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
    this.store.dispatch(fromStore.SET_ALPHACODE({code: this.skr}));
    this.store.dispatch(fromStore.GET_ALL_COUNTRIES());
    this.country$ = this.store.pipe(
      select(getSingleCountry)
    );
    this.bordersCountries$ = this.store.pipe(
      select(getBorderCountries)
    );
  }

  onGetCountry(abb: string) {
     this.router.navigate(['/single-country'] ,{queryParams: {akron: abb}})
     .then(
      () => {
        window.location.reload();
      }
     )
  }

}
