import { Component, OnInit } from '@angular/core';
import { Directive, AfterViewInit, OnDestroy } from '@angular/core';
import { MeteoService } from '../meteo.service';
import { TimeZoneService } from '../time-zone.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Pays } from '../util/pays';
import { environment } from '../../environments/environment';
import { getTime } from 'ngx-bootstrap/chronos/utils/date-getters';


@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],

})
export class MeteoComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly token = environment.googlemap.apiKey;

  findLocation: boolean = true;

  weather;
  weatherForecast;
  cityName;
  coords;
  city: boolean = false;
  error: boolean = false;
  forecast: boolean = false;
  meteoDetails: boolean;
  country;
  timeZone;
  showMap = false;
  urlGoogleMap = 'https://www.google.com/maps/embed/v1/view?zoom=12&center=';
  map;


  constructor(private _meteoService: MeteoService, private _timeZoneServie: TimeZoneService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    if (this.findLocation) {
      this.getMeteo()
    }
    else {
      this.getWeatherCity('Montpellier');
    }

  }

  ngAfterViewInit() {
    // document.querySelector('body').classList.add('meteo');
    // console.log(this.weather);

  }

  ngOnDestroy(): void {
    // document.querySelector('body').classList.remove('meteo');
  }


  getWeatherCity(city) {
    this._meteoService.searchCity(city).subscribe(
      res => {
        this.setData(res);
      }
    )
  }

  getWeatherForecastCity(city) {
    this._meteoService.searchCityForecast(city).subscribe(
      res => {
        this.weatherForecast = res;
         console.log(res);
        this.setData(res);
      }
    )
  }

  getTimeZone(lat, lng) {
    this._timeZoneServie.getTimeZone(lat, lng).subscribe(
      res => {
        this.timeZone = res;
        // console.log(res);
      },
      error => {
        this.timeZone = null;
      }
    )
  }

  getMeteo(): void {
    this._meteoService.getCoords()
      .subscribe(res => {
        //  console.log(res)
        // this.getWeatherCity(res.city)
        this.getWeatherForecastCity(res.city)
        
      } 
    )
    // this._meteoService.searchLatLong(this.coords.lat, this.coords.long)
    // .subscribe(res => this.setData(res));
  }

  searchCity() {
    if (this.cityName != null) {
      this.city = false;
      this.error = false;
      this.timeZone = null;
      // this._meteoService.searchCity(this.cityName)
      this._meteoService.searchCityForecast(this.cityName)
        .subscribe(
        (res) => {
          this.setData(res);
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

  setData(res){
    // this.weather = res;
    this.weatherForecast = res
    // console.log(new Date())

    this.getTimeZone(res.city.coord.lat, res.city.coord.lon);
    this.map = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlGoogleMap + res.city.coord.lat + ',' + res.city.coord.lon + '&key=' + this.token);
    document.querySelector('body').style.backgroundImage = "url(" + this._meteoService.getBgMeteo(this.weatherForecast.list[0].weather[0].icon) + ")";
    document.querySelector('body').style.backgroundRepeat ="no-repeat";
    document.querySelector('body').style.backgroundSize = "cover";
  }

  today(string) {
    let now = new Date();
    let date = new Date(string);
    console.log(now.getDay());
    console.log(date.getDay())
    if (date.getDay() == now.getDay()) {
      return true;
    }
  }

  forecastToggle() {
    this.forecast = !this.forecast;
    // if (this.forecast) {
    //   this.getWeatherForecastCity('Montpellier')
    // }
  }

  meteoDetailsToggle() {
    this.meteoDetails = !this.meteoDetails;
  }
}
