import { Injectable } from '@angular/core';
import { Meteo } from './meteo/meteo-model';
import { MessageService } from './message.service';
import { Constants } from './util/constants';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';;
import { tap } from 'rxjs/operators';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class MeteoService {

  private apiKey = '5e50de00e7dc01b9b6409db3278a2660';

  private urlGetCity;
  private meteoUrlCity;
  private urlLatLong;
  private meteoUrlForcastCity;

  constructor(private http: Http,
    private messageService: MessageService) {
    this.urlGetCity = 'http://ip-api.com/json';
    this.meteoUrlCity = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + this.apiKey + '&units=metric&lang=fr&q=';  // URL to web api
    this.urlLatLong = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + this.apiKey + '&units=metric&lang=fr&';
    this.meteoUrlForcastCity = 'http://api.openweathermap.org/data/2.5/forecast?APPID=' + this.apiKey + '&units=metric&lang=fr&q=';
  }

  getBgMeteo(value: string): string {
    return Constants.LIST_BG_METEO[value];
  }


  getCoords() {
    return this.http.get(this.urlGetCity)
      .map(res => res.json())
  }

  searchLatLong(lat, lon) {
    return this.http.get(this.urlLatLong + 'lat=' + lat + '&lon=' + lon)
      .map(res => res.json());
  }

  searchCity(cityName) {
    return this.http.get(this.meteoUrlCity + cityName)
      .map(res => res.json());
  }

  searchCityForecast(cityName) {
    return this.http.get(this.meteoUrlForcastCity + cityName)
      .map(res => res.json());
  }


  // searchLatLong(lat, lon):any {
  //   this.http.get(this.urlLatLong +'lat='+lat+'&lon='+lon )
  //     .subscribe(
  //     (res: Response) => {
  //       return res.json();
  //     })
  // }

  // getMeteo(): Observable<Response> {
  //   this.http.get(this.urlGetCity)
  //     .subscribe(
  //     (res: Response) => {
  //       let resultat = res.json();
  //       this.lat = resultat.lat;
  //       this.lon = resultat.lon;
  //       this.meteo = this.searchLatLong(this.lat, this.lon);
  //     })
  //   return this.meteo;
  // }


}
