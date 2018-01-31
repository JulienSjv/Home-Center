import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-group',
  templateUrl: './feed-group.component.html',
  styleUrls: ['./feed-group.component.css']
})
export class FeedGroupComponent implements OnInit {

  allFeeds: any;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
      this.getFeeds();
  }

  getFeeds() {
    this.feedService.getFeeds()
    .subscribe(
      feeds => {
        this.allFeeds = feeds,
        console.log(feeds);
      })
  }

}
