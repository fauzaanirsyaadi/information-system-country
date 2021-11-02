import { Component } from '@angular/core';
import { Country} from "./country.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'information-system-country';
  loadedFeature = "homepage";
  countryInfo =  {
    id: "",
    name : "",
    capital: "",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "",}

  temp: Country[]=[]
  temp2: Country[]=[]
  status: boolean= true

  switchView(selectedFeature : string){
    this.loadedFeature = selectedFeature;
  }

  countryDetails(event:Country){
    if(this.loadedFeature == 'homepage'){
      this.status= true
      this.countryInfo=event

    }
    else if(this.loadedFeature == 'countries'){
      this.status = false
      this.countryInfo=event
    }
  }


  datas(allcountry:Country[]){
    this.temp = allcountry
  }

}
