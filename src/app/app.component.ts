import { Component } from '@angular/core';
import {slideRight, slideLeft} from './router.animations';
import { trigger, state, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('accueil => meteo', slideRight),
      transition('meteo => accueil', slideLeft),
      transition('meteo => chatbox', slideRight),
      transition('chatbox => meteo', slideLeft),      
      transition('chatbox => accueil', slideLeft),
      transition('accueil => chatbox', slideRight),

    ])
  ]

})
export class AppComponent {
  title = 'Home Center';
  constructor() { }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
}


}
