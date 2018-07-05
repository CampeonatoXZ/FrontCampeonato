import { EquipesService } from './../equipes.service';
import { Equipe } from './../../../shared/models/Equipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastrar-equipe',
  templateUrl: './cadastrar-equipe.component.html',
  styleUrls: ['./cadastrar-equipe.component.css']
})
export class CadastrarEquipeComponent implements OnInit {

  @Input() equipe: Equipe;
  constructor(private _equipeService: EquipesService) { }

  ngOnInit() {
    this.equipe = new Equipe();
  }

  

  onSubmit(formulario): void{
    
    this._equipeService.newEquipe(this.equipe)
    .subscribe(data => console.log(data));
  }

}
