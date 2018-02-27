import { TestBed, inject } from '@angular/core/testing';

import { StudyLevelService } from './study-level.service';

describe('StudyLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudyLevelService]
    });
  });

  it('should be created', inject([StudyLevelService], (service: StudyLevelService) => {
    expect(service).toBeTruthy();
  }));
});
