import { TestBed } from '@angular/core/testing';

import { SportpersonService } from './sportperson.service';

describe('SportpersonService', () => {
  let service: SportpersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportpersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
