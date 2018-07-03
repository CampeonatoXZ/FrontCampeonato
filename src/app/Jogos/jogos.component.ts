import { Component, OnInit } from '@angular/core';
import { Jogo } from '../shared/models/Jogo';
import { JogosService } from './jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogo: Jogo[];
  constructor(private _jogosService: JogosService) { }

  ngOnInit() {
    this.getJogos();
  }
  getJogos(): void{
    this._jogosService.getAll()
    .subscribe(data => this.jogo = data);
  }
  deleteJogos(parameter): void {
    this._jogosService.deleteJogos(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.jogo.length-1; i--;){
      if(this.jogo[i].id === parameter) 
        this.jogo.splice(i,1)
    }
    console.log(parameter);
  }

}