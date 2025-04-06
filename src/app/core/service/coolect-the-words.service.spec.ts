import { TestBed } from '@angular/core/testing';

import { CoolectTheWordsService } from './coolect-the-words.service';

describe('CoolectTheWordsService', () => {
  let service: CoolectTheWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoolectTheWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
