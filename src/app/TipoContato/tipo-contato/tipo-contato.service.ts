import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TipoContatoService {

  private url: string = "http://localhost:1337/TipoContato/";

  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getTipoContato(parameter){
    return this.http.get(this.url + parameter)
    .map(res => res.json());
  }

  newTipoContato(parameter){
    return this.http.post(this.url, JSON.stringify(parameter))
    .map(res => res.json());
  }

  deleteTipoContato(parameter){

    return this.http.delete(this.url + parameter)
    .map(res => res.json());
      
  }

  updateTipoContato(id: number, parameter){
    console.log(parameter);
    return this.http.put(this.url + id, JSON.stringify(parameter))
    .map(res => res.json());
  }
}