import { TestBed, inject } from '@angular/core/testing';

import { TimeZoneService } from './time-zone.service';

describe('TimeZoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeZoneService]
    });
  });

  it('should be created', inject([TimeZoneService], (service: TimeZoneService) => {
    expect(service).toBeTruthy();
  }));
});
