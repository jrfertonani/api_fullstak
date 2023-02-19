import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroDesenvolvedorComponent } from './cadastro-desenvolvedor/cadastro-desenvolvedor.component';
import { CadastroNivelComponent } from './cadastro-nivel/cadastro-nivel.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cadastro', 
    children: [
      {
        path:'desenvolvedor', component: CadastroDesenvolvedorComponent
      },
      {
        path:'nivel', component: CadastroNivelComponent
      },
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
