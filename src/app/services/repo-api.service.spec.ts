import { TestBed, inject } from '@angular/core/testing';

import { RepoApiService } from './repo-api.service';

describe('RepoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoApiService]
    });
  });

  it('should be created', inject([RepoApiService], (service: RepoApiService) => {
    expect(service).toBeTruthy();
  }));
});
