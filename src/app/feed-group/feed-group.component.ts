import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedService } from '../feed-service.service';
import { AngularDraggableDirective } from 'angular2-draggable';

@Component({
  selector: 'app-feed-group',
  templateUrl: './feed-group.component.html',
  styleUrls: ['./feed-group.component.css']
})
export class FeedGroupComponent implements OnInit {
  @ViewChild(AngularDraggableDirective) directive = null
  allFeeds: any;
  properties: any;
  preventDefaultEvent = true;


  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getFeeds();
    // this.updatePosition();

  }

  getFeeds() {
    this.feedService.getFeeds()
      .subscribe(
      feeds => {
        this.allFeeds = feeds,
          console.log(feeds);
      })
  }

  onDragBegin(event) {
    console.log("BEGIN");
    // console.log(event);
  }

  onDragEnd(event) {
    console.log("END");
    // this.savePosition(event);
    // let x = event.clientX
    // let y = event.clientY
    console.log(event);
    // this.toto(event);

    // console.log(x);
    // console.log(y);
  }

  toto(event) {
    console.log(event.style.position.left)
  }













  // updatePosition() {
  //   this.properties.position.left += this.properties.position.x;
  //   this.properties.position.top += this.properties.position.y;
  //   this.properties.position.x = 0;
  //   this.properties.position.y = 0;
  // }
  // savePosition(event) {
  // let newPosition = event.style.transform.replace('translate(', '').replace(')', '').replace('px', '').replace('px', '').split(',');
  // let x = newPosition.length > 1 ? parseInt(newPosition[0]) : 0;
  // let y = newPosition.length > 1 ? parseInt(newPosition[1]) : 0;
  // this.properties.position.x = x;
  // this.properties.position.y = y;
  // let x = event.clientX
  // let y = event.clientY

  // console.log(x);
  // console.log(y);

  // }




}
