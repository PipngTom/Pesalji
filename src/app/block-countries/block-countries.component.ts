import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../country';
import { Store } from '@ngrx/store';
import * as AppAction from '../store/app.actions';


@Component({
  selector: 'app-block-countries',
  templateUrl: './block-countries.component.html',
  styleUrls: ['./block-countries.component.css']
})
export class BlockCountriesComponent implements OnInit,OnDestroy {
  blockCountries: Country[] = [];
  private subscription: Subscription;


  constructor(private appService: AppService, private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>) { 
  }

  ngOnInit(): void {
    this.subscription = this.store
    .select(block => block.reducer.blockCountries)
    .subscribe((item) => {
      this.blockCountries = item;
    })
  }


  onGetCountry(abb: string) {
    this.store.dispatch(new AppAction.SingleCountry(abb));
    this.router.navigate(['/single-country'], {queryParams: {akron: abb}})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
