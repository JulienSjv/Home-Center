import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
  providers: [NgbModal]

})
export class FeedCardComponent implements OnInit {
  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

}
