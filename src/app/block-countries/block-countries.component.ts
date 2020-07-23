import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-block-countries',
  templateUrl: './block-countries.component.html',
  styleUrls: ['./block-countries.component.css']
})
export class BlockCountriesComponent implements OnInit {
  abb: string;
  blockCountries = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['name', 'capital', 'code', 'details'];

  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  constructor(private appService: AppService, private route: ActivatedRoute,
    private router: Router) { 
    this.abb = this.route.snapshot.queryParamMap.get('abbrev');
    console.log(this.abb);
  }

  ngOnInit(): void {
    
     this.appService.onGetBlockCountries(this.abb)
    .subscribe(
      (items: any[]) => {
        console.log(items);
        this.blockCountries = items;
        this.dataSource = <any>this.blockCountries;
      }
    )
  }

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    
  }

  onGetCountry(abb: string) {
    this.router.navigate(['/single-country'], {queryParams: {akron: abb}})
  }

}
