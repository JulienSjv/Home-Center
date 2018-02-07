import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public files: UploadFile[] = [];
  drop = false;

  backgrounds = [{
    nom: "testdenom",
    selected: true
  },
  {
    nom: "testdenomsdsdsdsdsdsd2",
    selected: false
  },
  {
    nom: "testdenomsdsdsdsdsdsdsdsdsdsdsdsdsdsd3",
    selected: false
  },
  {
    nom: "testdenomsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdfsdsdfdsfsdfsdfsdfsdfsd4",
    selected: false
  },
  {
    nom: "testdenomsdsdsdsdsdsdsdsdsdsdsdfsdfsdfsd4",
    selected: false
  },
  {
    nom: "testdenomsdsdsdssdsdsdfsdsdfdsfsdfsdfsdfsdfsd4",
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
    // console.log(this.backgrounds)
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const file of event.files) {
      file.fileEntry.file(info => {
        console.log(info);
      });
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  dropToggle() {
    console.log("ALLO");
    this.drop = !this.drop;
  }



}
