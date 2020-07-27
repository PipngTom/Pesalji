import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BlockComponent } from './block/block.component';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BlockCountriesComponent } from './block-countries/block-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
    { path: 'block', component: BlockComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'block-countries', component: BlockCountriesComponent },
    { path: 'single-country', component: SingleCountryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    CountriesComponent,
    BlockCountriesComponent,
    SingleCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    ScrollingModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
