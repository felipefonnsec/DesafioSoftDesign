import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PautaComponent } from './pauta/pauta.component';
import { PaginaVotosComponent } from './pagina-votos/pagina-votos.component';
import { PaginaPautaComponent } from './pagina-pauta/pagina-pauta.component';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PautaComponent,
    PaginaVotosComponent,
    PaginaPautaComponent,
    PaginaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
