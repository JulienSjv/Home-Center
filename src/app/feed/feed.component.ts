import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed-service.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 10000, noPause: false, showIndicators: true } }
  ]
})
export class FeedComponent implements OnInit {

  @Input() feedc: any;

  private feeds: any;
  private time: Date;
  private tempo: number = 3600000;

  intervalId: any;
  constructor(private feedService: FeedService) {
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
    this.feedService.getFeedContent(this.feedc.url)
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
