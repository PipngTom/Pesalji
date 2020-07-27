import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Country } from '../country';


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
  private subscriptions: Subscription [] = [];

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) {
    this.skr = this.route.snapshot.queryParamMap.get('akron');
   }

  ngOnInit(): void {
    this.subscription = this.appService.onGetCode(this.skr)
    .subscribe(
      (item: Country) => {
        this.country = item;
        this.fillBordersCountries();
      }
    )
  }

  onGetCountry(abb: string) {
     this.router.navigate(['/single-country'], {queryParams: {akron: abb}})
     .then(
      (items) => {
        window.location.reload();
      }
    );
    console.log(abb)
  }

  fillBordersCountries() {
      this.country.borders.map((item: string, index: number) => {
       this.subscriptions.push(this.appService.onGetCode(item)
        .subscribe(
          (country: Country) => {
            this.bordersCountries.push({name: country.name, acr: country.alpha3Code, population: country.population});
            if (index == this.country.borders.length-1) {
              this.dataSource = <any>this.bordersCountries;
            }
          }
        ))
      }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptions.map((item) => {
      item.unsubscribe();
    })
  }
}
