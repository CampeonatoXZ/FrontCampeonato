import { Component, OnInit } from '@angular/core';
import { TipoChave } from '../../shared/models/TipoChave';
import { TipoChaveService } from './tipo-chave.service';

@Component({
  selector: 'app-tipo-chave',
  templateUrl: './tipo-chave.component.html',
  styleUrls: ['./tipo-chave.component.css']
})
export class TipoChaveComponent implements OnInit {

  tipoChave: TipoChave[];
  constructor(private _tipoChaveService: TipoChaveService) { }

  ngOnInit() {
    this.getTipoChave();
  }
  getTipoChave(): void{
    this._tipoChaveService.getAll()
    .subscribe(data => this.tipoChave = data);
  }
  deleteTipoChave(parameter): void {
    this._tipoChaveService.deleteTipoChave(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.tipoChave.length-1; i--;){
      if(this.tipoChave[i].id === parameter) 
        this.tipoChave.splice(i,1)
    }
    console.log(parameter);
  }

}