import { Component, OnInit } from '@angular/core';
import { Directive, AfterViewInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../router.animations';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [routerTransition],
  host: { '[@routerTransition]': '' }
})

export class AccueilComponent implements OnInit, AfterViewInit, OnDestroy {


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('accueil');
    document.querySelector('body').style.backgroundImage = "";

  }

  ngOnDestroy(): void {
    document.querySelector('body').classList.remove('accueil');
    document.querySelector('body').style.backgroundImage = "";

  }


}
