import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, AfterViewInit {
  countries = [];
  loaded = false;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['name', 'capital', 'code', 'details'];

  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
   
  constructor(private appService: AppService, private router: Router) { 
    
  }

  ngOnInit() {
    
    this.appService.onGetAllCountries()
    .subscribe(
      (items: any[]) => {
      //  console.log(items);
        this.countries = items;
        this.dataSource = <any>this.countries;
        this.loaded = true;
      //  console.log(this.dataSource);
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
    // this.appService.onGetCode(skr)
    // .subscribe(
    //   (items: any[]) => {
    //     console.log(items);
    //   }
    // )
  }

}
