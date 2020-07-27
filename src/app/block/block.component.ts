import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  blockCountries = [];
  blocks = [
    {
      name: 'European Union',
      acr: 'EU'
    },
    {
      name: 'European Free Trade Association',
      acr: 'EFTA'
    },
    {
      name: 'Caribbean Community',
      acr: 'CARICOM'
    },
    {
      name: 'Pacific Alliance',
      acr: 'PA'
    },
    {
      name: 'African Union',
      acr: 'AU'
    },
    {
      name: 'Union of South American Nations',
      acr: 'USAN'
    },
    {
      name: 'Eurasian Economic Union',
      acr: 'EEU'
    },
    {
      name: 'Arab League',
      acr: 'AL'
    },
    {
      name: 'Association of Southeast Asian Nations',
      acr: 'ASEAN'
    },
    {
      name: 'Central American Integration System',
      acr: 'CAIS'
    },
    {
      name: 'Central European Free Trade Agreement',
      acr: 'CEFTA'
    },
    {
      name: 'North American Free Trade Agreement',
      acr: 'NAFTA'
    },
    {
      name: 'South Asian Association for Regional Cooperation',
      acr: 'SAARC'
    }
  ]

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['name', 'acronym', 'details'];

  

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = <any>this.blocks;
  }

  onGetBlock(abb: string){
    this.router.navigate(['/block-countries'], {queryParams: {abbrev: abb}});
    console.log(abb);
  }
}
