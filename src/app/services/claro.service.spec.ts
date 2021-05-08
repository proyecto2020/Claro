import { TestBed } from '@angular/core/testing';

import { ClaroService } from './claro.service';

describe('ClaroService', () => {
  let service: ClaroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
