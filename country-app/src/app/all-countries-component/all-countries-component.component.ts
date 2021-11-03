import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-all-countries-component',
  templateUrl: './all-countries-component.component.html',
  styleUrls: ['./all-countries-component.component.css']
})
export class AllCountriesComponentComponent implements OnInit {
  countries: Country[] | undefined;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countryService.getCountries();
  }
}
