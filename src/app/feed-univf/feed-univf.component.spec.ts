import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUnivfComponent } from './feed-univf.component';

describe('FeedUnivfComponent', () => {
  let component: FeedUnivfComponent;
  let fixture: ComponentFixture<FeedUnivfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedUnivfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedUnivfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
