import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/models/Info';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info: Info[];
  constructor(private _infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo(): void{
    this._infoService.getAll()
    .subscribe(data => this.info = data);
  }
  deleteInfos(parameter): void {
    this._infoService.deleteInfos(parameter)
    .subscribe(data=> console.log(data));
    for(var i = this.info.length-1; i--;){
      if(this.info[i].id === parameter) 
        this.info.splice(i,1)
    }
    console.log(parameter);
  }

}