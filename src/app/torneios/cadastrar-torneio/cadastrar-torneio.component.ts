import { TorneiosService } from './../torneios.service';
import { Component, OnInit, Input } from '@angular/core';
import { Torneio } from '../../shared/models/Torneio';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastrar-torneio',
  templateUrl: './cadastrar-torneio.component.html',
  styleUrls: ['./cadastrar-torneio.component.css']
})
export class CadastrarTorneioComponent implements OnInit {
torneio: Torneio;
  constructor(private _torneiosService: TorneiosService) { }

  ngOnInit() {
    
    
  }

}
