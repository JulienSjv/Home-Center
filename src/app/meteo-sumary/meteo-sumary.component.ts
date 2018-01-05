import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo-sumary',
  templateUrl: './meteo-sumary.component.html',
  styleUrls: ['./meteo-sumary.component.css']
})
export class MeteoSumaryComponent implements AfterViewInit, OnDestroy, OnInit {

  private geoLoc = false;
  private tempo = 1800000;

  constructor(private _meteoService: MeteoService) {

    this.time = new Date();
  }

  weather: any;
  coords: any;
  time: Date;
  intervalId: any;

  ngOnInit() {

    // this.geoLoc ? this.getWeather() : this.getWeatherCity('Montpellier');
  }

  ngAfterViewInit() {
    this.geoLoc ? this.getWeather() : this.getWeatherCity('Montpellier');

  }

  getWeatherCity(city) {

    this._meteoService.searchCity(city).subscribe(
      res => {
        // console.log(res);
        this.weather = res;
        this.time = new Date();
      }
    )
    this.intervalId = setInterval(() => {
      this.getWeatherCity(city);
    }, this.tempo);
  }

  getWeather() {
    this.time = new Date();
    this._meteoService.getCoords().subscribe(
      res => {
        this._meteoService.searchLatLong(res.lat, res.lon).subscribe(
          data => {
            this.weather = data;
          })
      })
    this.intervalId = setInterval(() => {
      this.getWeather();
    }, this.tempo);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}
