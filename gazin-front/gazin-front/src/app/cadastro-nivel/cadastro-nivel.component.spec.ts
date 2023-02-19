import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNivelComponent } from './cadastro-nivel.component';

describe('CadastroNivelComponent', () => {
  let component: CadastroNivelComponent;
  let fixture: ComponentFixture<CadastroNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
