import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-nxi',
  templateUrl: './feed-nxi.component.html',
  styleUrls: ['./feed-nxi.component.css']
})
export class FeedNxiComponent implements OnInit, AfterViewInit {

  private feedUrl: string = 'https://www.nextinpact.com/rss/news.xml';
  private feeds: any;
  private time: Date;
  private tempo = 3600000;

  intervalId: any;


  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    // this.refreshFeed();
  }
  ngAfterViewInit() {
    this.refreshFeed();
  }
  private refreshFeed() {
    this.time = new Date();
    this.feedService.getFeedContent(this.feedUrl)
      .subscribe(
      feed => this.feeds = feed,
      error => console.log(error));
    this.intervalId = setInterval(() => {
      this.refreshFeed();
    }, this.tempo);

  }
}