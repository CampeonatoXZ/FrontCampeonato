import { Component, OnInit } from '@angular/core';
import { Chave } from '../../shared/models/Chave';
import { ChaveService } from './chave.service'

@Component({
  selector: 'app-chave',
  templateUrl: './chave.component.html',
  styleUrls: ['./chave.component.css']
})
export class ChaveComponent implements OnInit {

  chave: Chave[];
  constructor(private _chaveService: ChaveService) { }

  ngOnInit() {
    this.getChave();
  }
  getChave(): void{
    this._chaveService.getAll()
    .subscribe(data => this.chave = data);
  }
  deleteJogos(parameter): void {
    this._chaveService.deleteChaves(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.chave.length-1; i--;){
      if(this.chave[i].id === parameter) 
        this.chave.splice(i,1)
    }
    console.log(parameter);
  }

}