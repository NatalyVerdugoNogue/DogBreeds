import { TestBed, inject } from '@angular/core/testing';

import { GetImageService } from './get-image.service';

describe('GetImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetImageService]
    });
  });

  it('should be created', inject([GetImageService], (service: GetImageService) => {
    expect(service).toBeTruthy();
  }));
});
