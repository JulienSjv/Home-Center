import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FeedService } from '../feed-service.service';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit , AfterViewInit {

  private feedUrl: string = 'https://www.nextinpact.com/rss/news.xml';
  private feeds: any;



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
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed,
            error => console.log(error));
            console.log(this.feeds)

  }


}
