import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNxiComponent } from './feed-nxi.component';

describe('FeedNxiComponent', () => {
  let component: FeedNxiComponent;
  let fixture: ComponentFixture<FeedNxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedNxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedNxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
