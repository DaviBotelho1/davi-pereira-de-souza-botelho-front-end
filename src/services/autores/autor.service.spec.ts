import { TestBed } from '@angular/core/testing';
import { autorService } from './autor.service';

describe('AutorService', () => {

  let service: autorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(autorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


