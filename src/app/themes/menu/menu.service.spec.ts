import { TestBed, inject } from '@angular/core/testing';

import { NbMenuService } from './menu.service';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbMenuService]
    });
  });

  it('should be created', inject([NbMenuService], (service: NbMenuService) => {
    expect(service).toBeTruthy();
  }));
});
