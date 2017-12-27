import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo-sumary',
  templateUrl: './meteo-sumary.component.html',
  styleUrls: ['./meteo-sumary.component.css']
})
export class MeteoSumaryComponent implements OnInit {

 geoLoc = false;

  constructor(private _meteoService: MeteoService) {


  }

  weather: any;
  coords: any;

  ngOnInit() {

    this.geoLoc? this.getWeather() : this.getWeatherCity('Montpellier');
  }

  getWeatherCity(city) {
    this._meteoService.searchCity(city).subscribe(
      res => {
        console.log(res);
        this.weather = res;
      }
    )
  }

  getWeather() {
    this._meteoService.getCoords().subscribe(
      res => {
        console.log(res)
        this._meteoService.searchLatLong(res.lat, res.lon).subscribe(
          data => {
            console.log(data)
            this.weather = data;
          })
      })
  }

 
}
