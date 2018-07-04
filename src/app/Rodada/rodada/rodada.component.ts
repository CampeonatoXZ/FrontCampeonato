import { Component, OnInit } from '@angular/core';
import { Rodada } from '../../shared/models/Rodada';
import { RodadaService } from './rodada.service';


@Component({
  selector: 'app-rodada',
  templateUrl: './rodada.component.html',
  styleUrls: ['./rodada.component.css']
})
export class RodadaComponent implements OnInit {

  rodada: Rodada[];
  constructor(private _rodadaService: RodadaService) { }

  ngOnInit() {
    this.getRodadas();
  }
  getRodadas(): void{
    this._rodadaService.getAll()
    .subscribe(data => this.rodada = data);
  }
  deleteRodadas(parameter): void {
    this._rodadaService.deleteRodada(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.rodada.length-1; i--;){
      if(this.rodada[i].id === parameter) 
        this.rodada.splice(i,1)
    }
    console.log(parameter);
  }

}