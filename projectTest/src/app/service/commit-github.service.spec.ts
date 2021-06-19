import { TestBed } from '@angular/core/testing';

import { CommitGithubService } from './commit-github.service';

describe('CommitGithubService', () => {
  let service: CommitGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
