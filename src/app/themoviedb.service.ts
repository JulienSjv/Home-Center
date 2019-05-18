import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ThemoviedbService {

  readonly token = environment.themoviedb.apiKey;
  private apiMovie: string = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.token + '&language=fr&query=';

  constructor(
    private http: Http
  ) { }

  getMovie(movie: string): Observable<any> {
    return this.http.get(this.apiMovie + movie)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getMovieDetails(movie: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/'+ movie +'?api_key=' + this.token + '&language=fr&append_to_response=videos')
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