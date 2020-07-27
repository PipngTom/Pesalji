import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Country } from '../country';

@Component({
  selector: 'app-block-countries',
  templateUrl: './block-countries.component.html',
  styleUrls: ['./block-countries.component.css']
})
export class BlockCountriesComponent implements OnInit,OnDestroy {
  abb: string;
  blockCountries: Country[] = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['name', 'capital', 'code', 'details'];
  private subscription: Subscription;

  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }

  constructor(private appService: AppService, private route: ActivatedRoute,
    private router: Router) { 
    this.abb = this.route.snapshot.queryParamMap.get('abbrev');
  }

  ngOnInit(): void {
    this.subscription = this.appService.onGetBlockCountries(this.abb)
    .subscribe(
      (items: Country[]) => {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
