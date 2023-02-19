import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroDesenvolvedorModule } from './cadastro-desenvolvedor/cadastro-desenvolvedor.module';
import { CadastroNivelModule } from './cadastro-nivel/cadastro-nivel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule,
    HomeModule,
    NavbarModule,
    CadastroDesenvolvedorModule,
    CadastroNivelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
