import { Component, OnInit } from '@angular/core';
import { TipoTorneio } from '../../shared/models/TipoTorneio';
import { TipoTorneioService } from './tipo-torneio.service';

@Component({
  selector: 'app-tipo-torneio',
  templateUrl: './tipo-torneio.component.html',
  styleUrls: ['./tipo-torneio.component.css']
})
export class TipoTorneioComponent implements OnInit {

  tipoTorneio: TipoTorneio[];
  constructor(private _tipoTorneioService: TipoTorneioService) { }

  ngOnInit() {
    this.getTipoTorneio();
  }
  getTipoTorneio(): void{
    this._tipoTorneioService.getAll()
    .subscribe(data => this.tipoTorneio = data);
  }
  deleteTipoContato(parameter): void {
    this._tipoTorneioService.deleteTipoTorneio(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.tipoTorneio.length-1; i--;){
      if(this.tipoTorneio[i].id === parameter) 
        this.tipoTorneio.splice(i,1)
    }
    console.log(parameter);
  }

}