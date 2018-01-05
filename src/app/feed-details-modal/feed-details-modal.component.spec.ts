import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDetailsModalComponent } from './feed-details-modal.component';

describe('FeedDetailsModalComponent', () => {
  let component: FeedDetailsModalComponent;
  let fixture: ComponentFixture<FeedDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
