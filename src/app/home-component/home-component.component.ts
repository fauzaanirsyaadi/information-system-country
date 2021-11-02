import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Country} from "../country.model";
import {CountryService} from "../country.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  countries: Country[] = [];
  countriesByArea: Country[] = [];
  countriesByPopulation: Country[] = [];
  countriesByGDP: Country[] = [];

  @Output() selectedCountryDetails = new EventEmitter<string>();
  private data: any;


  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
    this.countriesByArea = [...this.countries].sort((a, b) => b.area - a.area);
    this.countriesByPopulation = [...this.countries].sort(
      (c, d) => d.population - c.population
    );
    this.countriesByGDP = [...this.countries].sort((c, d) => d.gdp - c.gdp);
  }

  getCountries() {
    this.countryService
      .getCountry()
      .subscribe((countries) => (this.countries = countries));
  }

  countryArea:Country[] = [];
  countryPopulation:Country[] = [];

  sortArea(event:Country[]){
    this.countryArea = event
  }

  sortPopulation(event:Country[]){
    this.countryPopulation = event
  }

  onSelect(details: string) {
    this.selectedCountryDetails.emit(details)
  }

  countryAreas(i: number) {
    this.data.emit(this.countryArea[i]);

  }

  countryDetails(i: number) {
    this.data.emit(this.countryPopulation[i])
  }
}
