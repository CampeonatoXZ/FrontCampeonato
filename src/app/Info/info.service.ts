import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private url: string = "http://localhost:1337/Info/";

  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url)
    .map(res => res.json());
  }

  getInfos(parameter){
    return this.http.get(this.url + parameter)
    .map(res => res.json());
  }

  newInfo(parameter){
    return this.http.post(this.url, JSON.stringify(parameter))
    .map(res => res.json());
  }

  deleteInfos(parameter){

    return this.http.delete(this.url + parameter)
    .map(res => res.json());
      
  }

  updateInfos(id: number, parameter){
    console.log(parameter);
    return this.http.put(this.url + id, JSON.stringify(parameter))
    .map(res => res.json());
  }
}