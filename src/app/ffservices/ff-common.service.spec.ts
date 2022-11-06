import { TestBed } from '@angular/core/testing';

import { FfCommonService } from './ff-common.service';

describe('FfCommonService', () => {
  let service: FfCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
