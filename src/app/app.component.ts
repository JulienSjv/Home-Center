import { Component } from '@angular/core';
import { Http , Response} from '@angular/http' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Center';
  constructor(private http: Http) { }

}
