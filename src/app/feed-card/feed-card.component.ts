import { Component, OnInit, Input } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
  providers: [ModalModule]

})
export class FeedCardComponent implements OnInit {
  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

}
