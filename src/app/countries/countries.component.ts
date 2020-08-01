import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../country';
import { Store } from '@ngrx/store';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: Country[]= [];
  filteredCountries: Country[] = [];
  private subscription: Subscription;
   
  constructor(private appService: AppService, private router: Router,
    private store: Store<any>) { 
    
  }

  ngOnInit() {
  this.store.dispatch(new AppActions.GetAllCountries());
  this.subscription = this.store
    .select(store => store.reducer.countries)
      .subscribe((items: Country[]) => {
          this.countries = items;
          this.filteredCountries = this.countries;
          
        }
      );
  }

  onFilter(event) {
    this.filteredCountries = this.countries.filter(item => {
      return item.name.toUpperCase().includes(event.target.value.toUpperCase());
    })
  }

  onGetCountry(skr: string) {
    this.store.dispatch(new AppActions.SingleCountry(skr));
    this.router.navigate(['/single-country'], {queryParams: {akron: skr}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
