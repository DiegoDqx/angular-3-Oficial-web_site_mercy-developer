import { TestBed } from '@angular/core/testing';

import { TecnicosEmpresaService } from './tecnicos-empresa.service';

describe('TecnicosEmpresaService', () => {
  let service: TecnicosEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicosEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
