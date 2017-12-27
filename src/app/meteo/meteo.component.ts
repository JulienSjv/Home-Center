import { Component, OnInit } from '@angular/core';

import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  weather;
  cityName;
  coords;

  constructor(private _meteoService: MeteoService) { }

  ngOnInit() {
    // this.getMeteo();
  }

  getMeteo(): void {
    this._meteoService.getCoords()
      .subscribe(res => this.coords = res.json());
      console.log(this.coords)
    // this.meteoService.searchLatLong(this.coords.lat, this.coords.long)
    // .subscribe(res => this.meteo = res);
  }

  searchCity() {
    this._meteoService.searchCity(this.cityName)
      .subscribe(
      (res) => {
        console.log(res)
        this.weather = res;
      }
      )
  }
}
