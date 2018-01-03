import { Component } from '@angular/core';
// import { Directive, AfterViewInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home Center';
  constructor() { }

}

// @Directive({ selector: '[blueDirective]' })
// export class BlueDirective implements OnDestroy, AfterViewInit {

//     ngAfterViewInit() {
//         document.querySelector('body').classList.add('meteo');

//     }
//     ngOnDestroy(): void {
//         document.querySelector('body').classList.remove('meteo');
//     }
// }

