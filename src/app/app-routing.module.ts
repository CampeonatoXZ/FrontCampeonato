import { CadastrarJogoComponent } from './Jogos/cadastrar-jogo/cadastrar-jogo.component';

import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { CadastrarTorneioComponent } from './torneios/cadastrar-torneio/cadastrar-torneio.component';
import { TorneiosComponent } from './torneios/torneios.component';
import { JogosComponent } from './jogos/jogos.component';

const routes: Routes = [
{ path: 'torneios', component: TorneiosComponent},
{ path: 'torneio-novo', component: CadastrarTorneioComponent},
{ path: 'jogos', component: JogosComponent},
{ path: 'jogo-novo', component: CadastrarJogoComponent},
]
@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
 