import { TestBed } from '@angular/core/testing';

import { CadastroDesenvolvedorService } from './cadastro-desenvolvedor.service';

describe('CadastroDesenvolvedorService', () => {
  let service: CadastroDesenvolvedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroDesenvolvedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
