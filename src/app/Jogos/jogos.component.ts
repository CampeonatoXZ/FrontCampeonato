import { Component, OnInit } from '@angular/core';
import { Jogo } from '../shared/models/Jogo';
import { JogosService } from './jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Jogo[];
  constructor(private _jogosService: JogosService) { }

  ngOnInit() {
    this.getJogos();
  }
  getJogos(): void{
    this._jogosService.getAll()
    .subscribe(data => this.jogos = data);
  }
  deleteJogo(parameter): void {
    this._jogosService.deleteJogo(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.jogos.length-1; i--;){
      if(this.jogos[i].id === parameter) 
        this.jogos.splice(i,1)
    }
    console.log(parameter);
  }

}