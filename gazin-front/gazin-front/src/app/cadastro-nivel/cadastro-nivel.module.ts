import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroNivelComponent } from './cadastro-nivel.component';



@NgModule({
  declarations: [CadastroNivelComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CadastroNivelComponent
  ]
})
export class CadastroNivelModule { }
