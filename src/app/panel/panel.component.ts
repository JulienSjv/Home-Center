import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  backgrounds = [{
    nom:"testdenom",
    selected: true
  },
  {
    nom:"testdenomsdsdsdsdsdsd2",
    selected: false
  },
  {
    nom:"testdenomsdsdsdsdsdsdsdsdsdsdsdsdsdsd3",
    selected: false
  },
  {
    nom:"testdenomsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdfsdsdfdsfsdfsdfsdfsdfsd4",
    selected: false
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  listClick(event, newValue) {
    // console.log(newValue);
   

    this.backgrounds.forEach(element => {
      if (element.nom === newValue.nom) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
    // this.backgrounds = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
  console.log(this.backgrounds)
}

  

}
