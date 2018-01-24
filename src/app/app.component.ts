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
      transition('accueil => chatbox', slideRight),
      transition('accueil => nexus', slideRight),

      transition('meteo => accueil', slideLeft),
      transition('meteo => chatbox', slideRight),
      transition('meteo => nexus', slideRight),

      transition('chatbox => accueil', slideLeft),
      transition('chatbox => meteo', slideLeft),      
      transition('chatbox => nexus', slideRight),

      transition('nexus => accueil', slideLeft),
      transition('nexus => meteo', slideLeft),
      transition('nexus => chatbox', slideLeft),


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
