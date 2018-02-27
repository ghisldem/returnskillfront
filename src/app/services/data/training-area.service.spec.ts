import { TestBed, inject } from '@angular/core/testing';

import { TrainingAreaService } from './training-area.service';

describe('TrainingAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingAreaService]
    });
  });

  it('should be created', inject([TrainingAreaService], (service: TrainingAreaService) => {
    expect(service).toBeTruthy();
  }));
});
