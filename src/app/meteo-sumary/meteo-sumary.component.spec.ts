import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoSumaryComponent } from './meteo-sumary.component';

describe('MeteoSumaryComponent', () => {
  let component: MeteoSumaryComponent;
  let fixture: ComponentFixture<MeteoSumaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoSumaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
