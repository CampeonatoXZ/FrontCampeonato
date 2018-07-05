import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Equipe } from '../../shared/models/Equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  private url: string = "http://localhost:8080/equipe/";
  
  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getEquipes(parameter){
    return this.http.get(this.url + parameter)
    .map(res => res.json());
  }

  newEquipe(parameter){
    //return this.http.post(this.url, JSON.stringify(parameter))
    return this.http.post("http://localhost:8080/equipe", parameter);
    
    console.log(parameter)
  }

  deleteEquipe(parameter){

    return this.http.delete(this.url + parameter);
    
    //.map(res => res.json());
      
  }

 // updateEquipe(id: number, parameter){
 //   console.log(parameter);
 //   return this.http.put(this.url + id, JSON.stringify(parameter))
 //   .map(res => res.json());
 // }

}
