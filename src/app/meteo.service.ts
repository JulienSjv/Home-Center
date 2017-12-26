import { Injectable } from '@angular/core';
import { Meteo } from './meteo/meteo-model';
import { MessageService } from './message.service';

// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http , Response} from '@angular/http' ;

@Injectable()
export class MeteoService {

  constructor(private http: Http,
    private messageService: MessageService) { }

    private meteoUrl = 'http://api.openweathermap.org/data/2.5/weather?q=pérols&units=metric&APPID=5e50de00e7dc01b9b6409db3278a2660&lang=fr';  // URL to web api


  searchCity(cityName) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=5e50de00e7dc01b9b6409db3278a2660&units=metric&lang=fr&q=' + cityName )
    .subscribe (
    (res: Response) => {
    const weatherCity = res.json() ;
    console.log(weatherCity)
    })}
}
