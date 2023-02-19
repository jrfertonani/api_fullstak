import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroDesenvolvedorService {

  constructor(private http: HttpClient) { }


  createDeveloper(developer: any){

    return this.http.post("http://localhost:3000/developer", developer)

  }

  getAllDevelopers(){
    return this.http.get("http://localhost:3000/developer")
  }


  getOneDeveloper(id: number){
    return this.http.get("http://localhost:3000/developer/"+id)
  }

  updateDeveloper(id: number, developer:any){
    return this.http.put("http://localhost:3000/developer/"+id, developer)
  }

  deleteDeveloper(id: number){
    return this.http.delete("http://localhost:3000/developer/"+id)
  }

}
