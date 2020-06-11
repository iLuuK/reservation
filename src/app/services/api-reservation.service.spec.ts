import { TestBed } from '@angular/core/testing';

import { ApiReservationService } from './api-reservation.service';

describe('ApiReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiReservationService = TestBed.get(ApiReservationService);
    expect(service).toBeTruthy();
  });
});
