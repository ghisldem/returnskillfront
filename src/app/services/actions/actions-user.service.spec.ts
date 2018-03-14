import { TestBed, inject } from '@angular/core/testing';

import { ActionsUserService } from './actions-user.service';

describe('ActionsUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionsUserService]
    });
  });

  it('should be created', inject([ActionsUserService], (service: ActionsUserService) => {
    expect(service).toBeTruthy();
  }));
});
