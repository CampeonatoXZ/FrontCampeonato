import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneiosComponent } from './torneios/torneios.component';
import { CadastrarTorneioComponent } from './torneios/cadastrar-torneio/cadastrar-torneio.component';

@NgModule({
  declarations: [
    AppComponent,
    TorneiosComponent,
    CadastrarTorneioComponent
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
