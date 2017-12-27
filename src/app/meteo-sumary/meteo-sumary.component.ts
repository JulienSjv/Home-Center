import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo-sumary',
  templateUrl: './meteo-sumary.component.html',
  styleUrls: ['./meteo-sumary.component.css']
})
export class MeteoSumaryComponent implements OnInit {

  constructor(private _meteoService: MeteoService) {


  }

  weather: any;
  coords: any;

  ngOnInit() {
    // this.getCoords();
    // this.getWeather();
    this.getWeatherCity('Montpellier');
  }

  getWeatherCity(city) {
    this._meteoService.searchCity(city).subscribe(
      res => {
        this.weather = res;
      }
    )
  }

  getCoords() {
    this._meteoService.getCoords().subscribe(
      res => {
        console.log(res)
        this.coords = res;
      })
  }

  getWeather() {
    this._meteoService.searchLatLong(this.coords.lat, this.coords.long).subscribe(
      data => {
        console.log(data)
        this.weather = data;
      })
  }
}
