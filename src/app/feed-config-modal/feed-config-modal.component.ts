import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { FeedService } from '../feed-service.service';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-feed-config-modal',
  templateUrl: './feed-config-modal.component.html',
  styleUrls: ['./feed-config-modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class FeedConfigModalComponent {

  listOne: FormArray = new FormArray([
    new FormControl('Coffee'),
    new FormControl('Orange Juice'),
    new FormControl('Red Wine'),
    new FormControl('Unhealty drink!'),
    new FormControl('Water')
  ]);

  @Input() allFeedsEdit: any;

  modalRef: BsModalRef;
  constructor(private feedService: FeedService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  saveFeed() {
    console.log(this.allFeedsEdit);
    this.feedService.updateFeeds(this.allFeedsEdit)
      .then((res) => console.log(res));
  }

  delFeed(feedId) {
    // console.log(feedId);
    this.allFeedsEdit.splice(feedId, 1);
  }

  addFeed() {
    let newFeed =
      {
        id: null,
        nom: "NewFeed",
        url: "https://",
        color: "#9e9e9e",
        selected: true
      }
    this.allFeedsEdit.push(newFeed);
  }

  getFeeds() {
    this.feedService.getFeeds()
      .subscribe(
      feeds => {
        this.allFeedsEdit = feeds,
          console.log(feeds);
      })
  }

  close() {
    this.getFeeds();
  }

}
