import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    FormsModule
  ]
})
export class HomeModule { }
