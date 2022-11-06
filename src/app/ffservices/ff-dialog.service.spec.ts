import { TestBed } from '@angular/core/testing';

import { FfDialogService } from './ff-dialog.service';

describe('FfDialogService', () => {
  let service: FfDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
