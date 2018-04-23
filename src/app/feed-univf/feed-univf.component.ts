import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FeedService } from '../feed-service.service';

@Component({
  selector: 'app-feed-univf',
  templateUrl: './feed-univf.component.html',
  styleUrls: ['./feed-univf.component.css']
})
export class FeedUnivfComponent implements OnInit, AfterViewInit {

  private feedUrl: string; // = 'http://www.universfreebox.com/backend.php?id_rubrique=29';
  private feeds: any;
  private time: Date;
  private tempo = 3600000;

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
