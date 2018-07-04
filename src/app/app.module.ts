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

@NgModule({
  declarations: [
    AppComponent,
    TorneiosComponent,
    CadastrarTorneioComponent,
    JogosComponent,
    ChaveComponent,
    InfoComponent,
    PartidaComponent,
    RodadaComponent
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
