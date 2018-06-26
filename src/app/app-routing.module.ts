
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CadastrarTorneioComponent } from './torneios/cadastrar-torneio/cadastrar-torneio.component';
import { TorneiosComponent } from './torneios/torneios.component';

const routes: Routes = [
{ path: 'torneio', component: TorneiosComponent},
{ path: 'torneio-novo', component: CadastrarTorneioComponent},
]
@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
 