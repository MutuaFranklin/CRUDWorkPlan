import { TestBed } from '@angular/core/testing';

import { WorkplanService } from './workplan.service';

describe('WorkplanService', () => {
  let service: WorkplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
