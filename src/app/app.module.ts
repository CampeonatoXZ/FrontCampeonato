import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneiosComponent } from './torneios/torneios.component';
import { CadastrarTorneioComponent } from './torneios/cadastrar-torneio/cadastrar-torneio.component';
import { JogosComponent } from './jogos/jogos.component';
import { ChaveComponent } from './Chave/chave/chave.component';
import { InfoComponent } from './info/info.component';
import { PartidaComponent } from './Partida/partida/partida.component';
import { RodadaComponent } from './Rodada/rodada/rodada.component';
import { TipoChaveComponent } from './TipoChave/tipo-chave/tipo-chave.component';
import { TipoContatoComponent } from './TipoContato/tipo-contato/tipo-contato.component';
import { TipoTorneioComponent } from './TipoTorneio/tipo-torneio/tipo-torneio.component';
import { CadastrarJogoComponent } from './Jogos/cadastrar-jogo/cadastrar-jogo.component';
import { EquipesComponent } from './Equipes/equipes/equipes.component';
import { JogadoresComponent } from './Equipes/jogadores/jogadores.component';
import { CadastrarEquipeComponent } from './Equipes/equipes/cadastrar-equipe/cadastrar-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneiosComponent,
    CadastrarTorneioComponent,
    JogosComponent,
    ChaveComponent,
    InfoComponent,
    PartidaComponent,
    RodadaComponent,
    TipoChaveComponent,
    TipoContatoComponent,
    TipoTorneioComponent,
    CadastrarJogoComponent,
    EquipesComponent,
    JogadoresComponent,
    CadastrarEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
