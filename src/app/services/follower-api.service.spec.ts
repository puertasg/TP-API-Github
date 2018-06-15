import { TestBed, inject } from '@angular/core/testing';

import { FollowerApiService } from './follower-api.service';

describe('FollowerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowerApiService]
    });
  });

  it('should be created', inject([FollowerApiService], (service: FollowerApiService) => {
    expect(service).toBeTruthy();
  }));
});
