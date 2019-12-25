import { TestBed } from '@angular/core/testing';

import { TinyUrlService } from './tinyUrl.service';

describe('TinyUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TinyUrlService = TestBed.get(TinyUrlService);
    expect(service).toBeTruthy();
  });
});
