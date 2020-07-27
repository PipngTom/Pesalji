import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, AfterViewInit, OnDestroy {
  countries: Country[]= [];
  loaded = false;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['name', 'capital', 'code', 'details'];
  private subscription: Subscription;

  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
   
  constructor(private appService: AppService, private router: Router) { 
    
  }

  ngOnInit() {
    this.subscription = this.appService.onGetAllCountries()
    .subscribe(
      (items: Country[]) => {
        this.countries = items;
        this.dataSource = <any>this.countries;
        this.loaded = true;
      }
    )
  }

  ngAfterViewInit() {
    if(this.loaded){
      this.dataSource.paginator = this.paginator;
    }
    
  }
  
  onGetCountry(skr: string) {
    this.router.navigate(['/single-country'], {queryParams: {akron: skr}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
