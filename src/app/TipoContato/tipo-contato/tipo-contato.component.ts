import { Component, OnInit } from '@angular/core';
import { TipoContato } from '../../shared/models/TipoContato';
import { TipoContatoService } from './tipo-contato.service';

@Component({
  selector: 'app-tipo-contato',
  templateUrl: './tipo-contato.component.html',
  styleUrls: ['./tipo-contato.component.css']
})
export class TipoContatoComponent implements OnInit {

  tipoContato: TipoContato[];
  constructor(private _tipoContatoService: TipoContatoService) { }

  ngOnInit() {
    this.getTipoContato();
  }
  getTipoContato(): void{
    this._tipoContatoService.getAll()
    .subscribe(data => this.tipoContato = data);
  }
  deleteTipoContato(parameter): void {
    this._tipoContatoService.deleteTipoContato(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.tipoContato.length-1; i--;){
      if(this.tipoContato[i].id === parameter) 
        this.tipoContato.splice(i,1)
    }
    console.log(parameter);
  }

}