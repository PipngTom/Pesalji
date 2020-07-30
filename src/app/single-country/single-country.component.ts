import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Country } from '../country';
import { Store } from '@ngrx/store';
import * as AppActions from '../store/app.actions';



@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit, OnDestroy {
  skr: string;
  country: Country;
  dataSource = new MatTableDataSource<Country>();
  displayedColumns = ['name', 'population', 'acr' ,'details'];
  bordersCountries = [];
  private subscription: Subscription;
  private subscript: Subscription;

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router,
    private store: Store<any>) {
    this.skr = this.route.snapshot.queryParamMap.get('akron');
    }

  ngOnInit(): void {
    this.store.dispatch(new AppActions.FlushBordersCoutries());
    this.store.dispatch(new AppActions.SingleCountry(this.skr));
    this.subscription = this.store
    .select(single => single.reducer.singleCountry)
    .subscribe(
  (item: Country) => {
    this.country = item;
    if(item){
      if(item.alpha3Code == this.skr){
        this.fillBordersCountries();
      }    

    }
  }
)
    
  }

  onGetCountry(abb: string) {
    this.store.dispatch(new AppActions.SingleCountry(abb));
     this.router.navigate(['/single-country'] ,{queryParams: {akron: abb}})
     .then(
      () => {
        window.location.reload();
      }
    );
  }

  fillBordersCountries() {
    this.country.borders.map((item: string) => {
      this.store.dispatch(new AppActions.GetBordersCountries(item))
    })
    this.subscript = this.store
    .select(border => border.reducer.bordersCountries)
    .subscribe(
      (items) => {
        this.dataSource = items;
      }
    )
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscript.unsubscribe();
  }
}
