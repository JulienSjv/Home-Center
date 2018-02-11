import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NexusService {

  private urlSofts: string = 'http://localhost:8080/softs'
  private urlCateories: string = 'http://localhost:8080/categories'


  constructor(
    private http: Http
  ) { }

  getSofts() {
    return this.http.get(this.urlSofts)
      .map(res => res.json());
  }

  getCategories() {
    return this.http.get(this.urlCateories)
      .map(res => res.json());
  }




}

