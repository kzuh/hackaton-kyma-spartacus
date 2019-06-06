import { TestBed } from '@angular/core/testing';

import { PandamonsterReviewverifiedServiceService } from './pandamonster-reviewverified-service.service';

describe('PandamonsterReviewverifiedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PandamonsterReviewverifiedServiceService = TestBed.get(PandamonsterReviewverifiedServiceService);
    expect(service).toBeTruthy();
  });
});
