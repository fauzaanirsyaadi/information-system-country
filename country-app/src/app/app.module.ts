import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CountryDetailComponentComponent } from './country-detail-component/country-detail-component.component';
import { AllCountriesComponentComponent } from './all-countries-component/all-countries-component.component';

import { CountryService } from './country-service.service';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CountryDetailComponentComponent,
    AllCountriesComponentComponent

  ],
  imports: [
    BrowserModule,
    // RouterModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
