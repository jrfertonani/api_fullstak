import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroDesenvolvedorService } from './cadastro-desenvolvedor.service';

class Developer {
  name: any ;
  level_id: any ;
  gender: any ;
  born_at: any ;
  age: any ;
  hobby: any ;
}

@Component({
  selector: 'app-cadastro-desenvolvedor',
  templateUrl: './cadastro-desenvolvedor.component.html',
  styleUrls: ['./cadastro-desenvolvedor.component.css'],
  providers:[
    CadastroDesenvolvedorService
  ]
})
export class CadastroDesenvolvedorComponent {
  
  constructor( 
    private router:Router, 
    private formBuilder: FormBuilder,
    private cadastroDesenvolvedorService:CadastroDesenvolvedorService
    ){
      
    }

    formDeveloper = this.formBuilder.group({
      inputNome:[''],
      inputNivel:[''],
      inputSexo:[''],
      inputNascimento:[''],
      inputIdade:[''],
      inputHobby:['']
    })

  salvar(){

    const developer = new Developer();

    developer.name = this.formDeveloper.value.inputNome
    developer.level_id = this.formDeveloper.value.inputNivel
    developer.gender = this.formDeveloper.value.inputSexo
    developer.born_at = this.formDeveloper.value.inputNascimento
    developer.age = this.formDeveloper.value.inputIdade
    developer.hobby = this.formDeveloper.value.inputHobby

    console.log(this.formDeveloper.value)

    console.log(developer)

    this.cadastroDesenvolvedorService.createDeveloper(developer)
    .subscribe(
      (response) => {console.log(response)},
      error => console.log(error),
      () => console.log("Complete call request")

    )

  }

  cancelar(form: NgForm){
    form.reset;
  }

  getDevelopers(){
    this.cadastroDesenvolvedorService.getAllDevelopers()
  }

}
