import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-google',
  templateUrl: './feed-google.component.html',
  styleUrls: ['./feed-google.component.css']
})
export class FeedGoogleComponent implements OnInit {

  private feedUrl: string = 'https://news.google.com/news/rss/settings/sections?ned=fr&hl=fr&gl=FR';
  private feeds: any;
  private time: Date;
  private tempo: number = 3600000;

  intervalId: any;


  constructor(
    private feedService: FeedService
  ) {
  this.time = new Date();
  }

  ngOnInit() {
    // this.refreshFeed();
  }

  ngAfterViewInit() {
    this.refreshFeed();

  }
  private refreshFeed() {
    this.intervalId = null;
    // this.feeds = null
    this.time = new Date();
    this.feedService.getFeedContent(this.feedUrl)
      .subscribe(
      feed => {
        this.feeds = feed
      },
      error => console.log(error));
    this.intervalId = setInterval(() => {
      this.refreshFeed();
    }, this.tempo);

  }


}