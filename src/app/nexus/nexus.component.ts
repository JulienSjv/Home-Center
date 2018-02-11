import { Component, OnInit } from '@angular/core';
import { NexusService } from '../nexus.service';

@Component({
  selector: 'app-nexus',
  templateUrl: './nexus.component.html',
  styleUrls: ['./nexus.component.css']
})
export class NexusComponent implements OnInit {

  categories;
  softs;

  constructor(private nexusService: NexusService) { }

  ngOnInit() {

    this.getSofts();
    this.getCategories();

    document.querySelector('body').style.backgroundImage = "";
    document.querySelector('body').classList.add('nexus');
  }

  getNexus() {
    this.getSofts();
    this.getCategories();
  }


  getSofts() {
    this.nexusService.getSofts()
      .subscribe(
      softs => {
        this.softs = softs,
          console.log(softs);
      })
  }

  getCategories() {
    this.nexusService.getCategories()
      .subscribe(
      categories => {
        this.categories = categories,
          console.log(categories);
      })
  }

}
