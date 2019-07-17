import { TestBed, inject } from '@angular/core/testing';

import { GetListService } from './get-list.service';

describe('GetListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetListService]
    });
  });

  it('should be created', inject([GetListService], (service: GetListService) => {
    expect(service).toBeTruthy();
  }));
});
