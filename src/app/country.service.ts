import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Countries} from "./countryDataDummy";
import {Country} from "./country.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries = of(Countries);
  constructor() {}

  getCountry(): Observable<Country[]> {
    return this.countries;
  }

  getOneCountry(id: string): Observable<Country> {
    return this.countries.pipe(
      map((countries) => countries.filter((country) => country.id == id)[0])
    );
  }
}
