import { Component, OnInit } from '@angular/core';

import { Meteo } from '../meteo/meteo-model';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  meteo: Meteo;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
  //  this.getMeteo();
  //  console.log(this.meteo)
  }

  // getMeteo(): void {
  //   this.meteoService.getMeteo()
  //     .subscribe(meteo => this.meteo = meteo);
  // }

}
