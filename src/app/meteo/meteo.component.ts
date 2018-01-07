import { Component, OnInit } from '@angular/core';
import { Directive, AfterViewInit, OnDestroy } from '@angular/core';
import { MeteoService } from '../meteo.service';
import {TimeZoneService} from '../time-zone.service';
import {Pays} from '../util/pays';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],

})
export class MeteoComponent implements OnInit, AfterViewInit, OnDestroy {

  weather;
  cityName;
  coords;
  city: boolean = false;
  error: boolean = false;
  country;
  timeZone;


  constructor(private _meteoService: MeteoService, private _timeZoneServie: TimeZoneService) { }

  ngOnInit() {
    this.getWeatherCity('Montpellier');
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('meteo');
    // console.log(this.weather);

  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('meteo');
  }


  getWeatherCity(city) {
    this._meteoService.searchCity(city).subscribe(
      res => {
        this.weather = res;
        console.log(res);
         this.getTimeZone(res.coord.lat, res.coord.lon);
        // console.log(this.getTimeZone(this.weather.sys.country))
        document.querySelector('body').style.backgroundImage = "url(" + this._meteoService.getBgMeteo(this.weather.weather[0].icon) + ")";
      }
    )
  }

  getTimeZone(lat, lng) {
    this._timeZoneServie.getTimeZone(lat, lng).subscribe(
      res => {
        this.timeZone = res;
        console.log(res);
      },
      error => {
        this.timeZone = null;
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
    if (this.cityName != null) {
      this.city = false;
      this.error = false;
      this.timeZone = null;
      this._meteoService.searchCity(this.cityName)
        .subscribe(
        (res) => {
          console.log(res);
          this.weather = res;
          this.getTimeZone(res.coord.lat, res.coord.lon);
          document.querySelector('body').style.backgroundImage = "url(" + this._meteoService.getBgMeteo(this.weather.weather[0].icon) + ")";
          this.cityName = null;
        },
        error => {
          this.error = true;
          // this.cityName = null;
        }
        )
    } else {
      this.city = true;
      this.error = false;
    }
  }

  getCountry(code) {
    return Pays.LIST_PAYS[code];
  }
}
