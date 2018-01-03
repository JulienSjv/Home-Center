import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedGoogleComponent } from './feed-google.component';

describe('FeedGoogleComponent', () => {
  let component: FeedGoogleComponent;
  let fixture: ComponentFixture<FeedGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
