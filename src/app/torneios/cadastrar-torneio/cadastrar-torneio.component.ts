import { TorneiosService } from './../torneios.service';
import { Component, OnInit, Input } from '@angular/core';
import { Torneio } from '../../shared/models/Torneio';


@Component({
  selector: 'app-cadastrar-torneio',
  templateUrl: './cadastrar-torneio.component.html',
  styleUrls: ['./cadastrar-torneio.component.css']
})
export class CadastrarTorneioComponent implements OnInit {
 
 
 @Input() torneio: Torneio;
  constructor(private _torneiosService: TorneiosService) { }

  ngOnInit() {
    this.torneio = new Torneio();
  }

  onSubmit(formulario): void{
    this._torneiosService.newTorneio(this.torneio)
    .subscribe(data => console.log(data));
    console.log(this.torneio);
  }

}

