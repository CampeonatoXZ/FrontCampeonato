import { Torneio } from './../shared/models/Torneio';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-torneios',
  templateUrl: './torneios.component.html',
  styleUrls: ['./torneios.component.css']
})
export class TorneiosComponent implements OnInit {

  torneio: Torneio= {
    id: 1,
    name: 'Lol'

  };
  constructor() { }

  ngOnInit() {
    
  }

}
