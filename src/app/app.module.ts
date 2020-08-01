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
import { CountriesComponent } from './countries/countries.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BlockCountriesComponent } from './block-countries/block-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import {  AppEffects } from './store/app.effects';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


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
    StoreModule.forRoot({reducer: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
