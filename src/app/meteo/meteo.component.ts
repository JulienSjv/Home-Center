import { Component, OnInit } from '@angular/core';
import { Directive, AfterViewInit, OnDestroy } from '@angular/core';

import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  
})
export class MeteoComponent implements OnInit, AfterViewInit, OnDestroy {

  weather;
  cityName;
  coords;

  constructor(private _meteoService: MeteoService) { }

  ngOnInit() {
    this.getWeatherCity('Montpellier');
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('meteo');

  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('meteo');
  }





  getWeatherCity(city) {
    this._meteoService.searchCity(city).subscribe(
      res => {
        this.weather = res;
        document.querySelector('body').style.backgroundImage = "url("+ this._meteoService.getBgMeteo(this.weather.weather[0].icon) +")";
        console.log(this.weather.weather[0].icon);
      }
    )
  }

  getMeteo(): void {
    this._meteoService.getCoords()
      .subscribe(res => this.coords = res.json());
    // console.log(this.coords)
    // this.meteoService.searchLatLong(this.coords.lat, this.coords.long)
    // .subscribe(res => this.meteo = res);
  }

  searchCity() {
    this._meteoService.searchCity(this.cityName)
      .subscribe(
      (res) => {
        console.log(res)
        this.weather = res;
        document.querySelector('body').style.backgroundImage = "url("+ this._meteoService.getBgMeteo(this.weather.weather[0].icon) +")";        
      }
      )
  }
}
