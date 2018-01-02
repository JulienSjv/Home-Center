import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedKrbComponent } from './feed-krb.component';

describe('FeedKrbComponent', () => {
  let component: FeedKrbComponent;
  let fixture: ComponentFixture<FeedKrbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedKrbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedKrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
