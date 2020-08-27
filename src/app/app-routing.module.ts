import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { CountriesComponent } from './countries/countries.component';
import { BlockCountriesComponent } from './block-countries/block-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';

const appRoutes: Routes = [
  { path: 'block', component: BlockComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'block-countries', component: BlockCountriesComponent },
  { path: 'single-country', component: SingleCountryComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
