import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meteo-details',
  templateUrl: './meteo-details.component.html',
  styleUrls: ['./meteo-details.component.css']
})
export class MeteoDetailsComponent implements OnInit {

  @Input() weatherForecast;

  constructor( ) { }


  ngOnInit(): void {
    // console.log(this.weatherForecast)
    // this.today(this.weatherForecast.list[20].dt_txt)
    // this.getMeteo();
  }

  nextDays(string) {
    let now = new Date();
    let date = new Date(string);
    // console.log("    "+now.getDay());
    // console.log(date.getHours())
    if (date.getHours() == 12) {
      return  true
  }
}

  // getMeteo(): void {
  //   const city = this.route.snapshot.paramMap.get('city');
  //   this.meteoService.getMeteoCity(city)
  //     .subscribe(meteo => this.meteo = meteo);
  // }



}
