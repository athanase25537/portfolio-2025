import { TestBed } from '@angular/core/testing';

import { Myresume } from './myresume';

describe('Myresume', () => {
  let service: Myresume;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myresume);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
