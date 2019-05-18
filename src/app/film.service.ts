import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class FilmService {


  private urlFilms: string = 'http://localhost:8099/nexus/films'


  constructor(
    private http: Http
  ) { }

  getFilms() {
    return this.http.get(this.urlFilms)
      .map(res => res.json());
  }

  updateFilms(films){
    const httpOptions = {
      headers: new Headers({ 'Content-Type': 'application/json' })
    };

    let url = this.urlFilms;

    return this.http
      .put(url, JSON.stringify(films), httpOptions)
      //.map(res => res.json());
  }

  


}
