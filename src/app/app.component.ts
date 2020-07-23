import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-prj';
  // countries: any [] = [];
  // blockCountries: any [] = [];
  // displayedColumns = ['name', 'capital', 'code', 'details'];
  //  dataSource = new MatTableDataSource<any>();
  // niz = [
  //   {
  //     name: 'Serbia',
  //     capital: 'Belgrade'
  //   },
  //   {
  //     name: 'Crna Gora',
  //     capital: 'Podgorica'
  //   }
  // ]
  // dataSource = new MatTableDataSource(this.niz);

  constructor(private appService: AppService) {
    
  }

  // onGetBlock(event: any){
  //   console.log(event.target.value);
  //   this.appService.onGetBlockCountries(event.target.value)
  //   .subscribe(
  //     (items: any[]) => {
  //       console.log(items);
  //       this.blockCountries = items;
  //     }
  //   )
    
  // }
  ngOnInit() {}
  // ngOnInit() {
  //   this.appService.onGetAllCountries()
  //   .subscribe(
  //     (items: any[]) => {
  //       console.log(items);
  //       this.countries = items;
  //       this.dataSource = <any>this.countries;
  //       console.log(this.dataSource);
  //     }
  //   )
  // }
  
  // onGetCountry(skr: string) {
  //   this.appService.onGetCode(skr)
  //   .subscribe(
  //     (items: any[]) => {
  //       console.log(items);
  //     }
  //   )
  // }

}
