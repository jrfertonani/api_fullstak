import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroDesenvolvedorComponent } from './cadastro-desenvolvedor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroDesenvolvedorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports:[
  ],
  
})
export class CadastroDesenvolvedorModule { }
