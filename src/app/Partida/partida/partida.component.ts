import { Component, OnInit } from '@angular/core';
import { PartidaService } from './partida.service';
import { Partida } from '../../shared/models/Partida';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  partida: Partida[];
  constructor(private _partidaService: PartidaService) { }

  ngOnInit() {
    this.getPartidas();
  }
  getPartidas(): void{
    this._partidaService.getAll()
    .subscribe(data => this.partida = data);
  }
  deletePartidas(parameter): void {
    this._partidaService.deletePartidas(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.partida.length-1; i--;){
      if(this.partida[i].id === parameter) 
        this.partida.splice(i,1)
    }
    console.log(parameter);
  }

}