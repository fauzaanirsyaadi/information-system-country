import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponentComponent } from './home-component/home-component.component';
import { CountryDetailComponentComponent } from './country-detail-component/country-detail-component.component';
import { AllCountriesComponentComponent } from './all-countries-component/all-countries-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'detail/:name', component: CountryDetailComponentComponent },
  { path: 'all-countries', component: AllCountriesComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
