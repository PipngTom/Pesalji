import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  loaded = false;
  skr: string;
  country: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['name', 'population', 'acr' ,'details'];
  bordersCountries = [  ];

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) {
    this.skr = this.route.snapshot.queryParamMap.get('akron');
   }

  ngOnInit(): void {
    this.appService.onGetCode(this.skr)
    .subscribe(
      (item: any[]) => {
        this.country = item;
        this.fillBordersCountries();
        //this.dataSource = <any>this.bordersCountries;
        
        
        console.log(item);
      }
    )
  }

  onGetCountry(abb: string) {
    this.router.navigate(['single-country'], {queryParams: {akron: abb}}).then(
      (items) => {
        window.location.reload();
      }
    );
    console.log(abb)
  }

  fillBordersCountries() {
    for (let i=0; i<this.country.borders.length;i++) {
      this.appService.onGetCode(this.country.borders[i])
      .subscribe(
        (country: any) => {
          //this.bordersCountries.push(country.name);
          console.log(country);
          console.log(this.bordersCountries.length);
          this.bordersCountries.push({name: country.name, acr: country.alpha3Code, population: country.population})
          if(i==this.country.borders.length-1){
            this.dataSource = <any>this.bordersCountries;
          }
          
        }
      )
    }
    
   console.log(this.bordersCountries);
    
    this.loaded = true;
  }

}
