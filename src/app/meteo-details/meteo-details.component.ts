import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Meteo } from '../meteo/meteo-model';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo-details',
  templateUrl: './meteo-details.component.html',
  styleUrls: ['./meteo-details.component.css']
})
export class MeteoDetailsComponent implements OnInit {

  @Input() weatherForecast;

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) { }


  ngOnInit(): void {
    // this.getMeteo();
  }

  // getMeteo(): void {
  //   const city = this.route.snapshot.paramMap.get('city');
  //   this.meteoService.getMeteoCity(city)
  //     .subscribe(meteo => this.meteo = meteo);
  // }

  goBack(): void {
    this.location.back();
  }


}
