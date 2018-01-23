import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-feed-details-modal',
  templateUrl: './feed-details-modal.component.html',
  styleUrls: ['./feed-details-modal.component.css'],
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

export class FeedDetailsModalComponent {

  @Input() feed: any;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}