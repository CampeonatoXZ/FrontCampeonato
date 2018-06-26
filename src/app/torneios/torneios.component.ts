import { Torneio } from './../shared/models/Torneio';
import { Component, OnInit } from '@angular/core';

import { TorneiosService } from "./torneios.service";
@Component({
  selector: 'app-torneios',
  templateUrl: './torneios.component.html',
  styleUrls: ['./torneios.component.css']
})
export class TorneiosComponent implements OnInit {

  torneios: Torneio[];
  constructor(private _torneiosService: TorneiosService) { }

  ngOnInit() {
    this.getTorneios();
  }
  getTorneios(): void{
    this._torneiosService.getAll()
    .subscribe(data => this.torneios = data);
  }
  deleteTorneio(parameter): void {
    this._torneiosService.deleteTorneio(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.torneios.length-1; i--;){
      if(this.torneios[i].id === parameter) 
        this.torneios.splice(i,1)
    }
    console.log(parameter);
  }

}
