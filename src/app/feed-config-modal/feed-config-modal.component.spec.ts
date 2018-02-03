import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedConfigModalComponent } from './feed-config-modal.component';

describe('FeedConfigModalComponent', () => {
  let component: FeedConfigModalComponent;
  let fixture: ComponentFixture<FeedConfigModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedConfigModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
