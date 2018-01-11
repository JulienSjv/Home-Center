import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class TimeZoneService {

  readonly token = environment.timezone.apiKey;
  private country: string;
  private city: string;
  private apiTimeZone: string = 'http://api.timezonedb.com/v2/get-time-zone?key=' + this.token + '&format=json&by=position&';

  constructor(
    private http: Http
  ) { }

  getTimeZone(lat: string, lng: string): Observable<any> {
    // console.log(this.apiTimeZone + city)
    return this.http.get(this.apiTimeZone + 'lat=' + lat + '&lng=' + lng)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}