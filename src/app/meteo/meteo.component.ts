import { Component, OnInit } from '@angular/core';
import { Meteo } from './meteo-model';

import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  meteo;
  cityName: String;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
   // this.searchCity();
  }

  searchCity(): void {
    this.meteoService.searchCity(this.cityName)
  }

}
