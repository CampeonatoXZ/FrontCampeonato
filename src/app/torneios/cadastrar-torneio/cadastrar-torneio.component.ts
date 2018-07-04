import { JogosService } from './../../Jogos/jogos.service';
import { Jogo } from './../../shared/models/Jogo';
import { TorneiosService } from './../torneios.service';
import { Component, OnInit, Input } from '@angular/core';
import { Torneio } from '../../shared/models/Torneio';




@Component({
  selector: 'app-cadastrar-torneio',
  templateUrl: './cadastrar-torneio.component.html',
  styleUrls: ['./cadastrar-torneio.component.css']
})
export class CadastrarTorneioComponent implements OnInit {

  jogos: Jogo[];
  @Input() torneio: Torneio;
  
  constructor(private _torneiosService: TorneiosService, private _jogosService: JogosService) { }

  ngOnInit() {
    this.torneio = new Torneio();
    this.getJogos();
  }

  getJogos(): void {
    this._jogosService.getAll()
      .subscribe(data => this.jogos = data);
  }

  onSubmit(formulario): void {
    this._torneiosService.newTorneio(this.torneio)
      .subscribe(data => console.log(data));
    console.log(this.torneio);
  }

}

