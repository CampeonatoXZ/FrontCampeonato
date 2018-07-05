import { EquipesService } from './equipes.service';
import { Equipe } from './../../shared/models/Equipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  equipes: Equipe[];
  constructor(private _equipesService: EquipesService) { }

  ngOnInit() {
    this.getEquipes();
  }
  getEquipes(): void{
    this._equipesService.getAll()
    .subscribe(data => this.equipes = data);
  }
  deleteTorneio(parameter): void {
    this._equipesService.deleteEquipe(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.equipes.length-1; i--;){
      if(this.equipes[i].idEquipe === parameter) 
        this.equipes.splice(i,1)
    }
    console.log(parameter);
  }
}