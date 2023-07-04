import { TestBed } from '@angular/core/testing';

import { FiltroProductosService } from './filtro-productos.service';

describe('FiltroProductosService', () => {
  let service: FiltroProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
