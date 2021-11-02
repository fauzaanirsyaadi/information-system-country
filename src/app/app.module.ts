import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CountryDetailComponentComponent } from './country-detail-component/country-detail-component.component';
import { AllCountryComponentComponent } from './all-country-component/all-country-component.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CountryDetailComponentComponent,
    AllCountryComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
