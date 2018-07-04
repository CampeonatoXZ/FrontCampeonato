import { JogosService } from './../jogos.service';
import { Jogo } from './../../shared/models/Jogo';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cadastrar-jogo',
  templateUrl: './cadastrar-jogo.component.html',
  styleUrls: ['./cadastrar-jogo.component.css']
})
export class CadastrarJogoComponent implements OnInit {

  @Input() jogo: Jogo;
  constructor(private _jogoService: JogosService) { }

  ngOnInit() {
    this.jogo = new Jogo();
  }
  onSubmit(formulario): void{
    this._jogoService.newJogo(this.jogo)
    .subscribe(data => console.log(data));
  }

}
