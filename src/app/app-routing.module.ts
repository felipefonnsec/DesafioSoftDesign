import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaVotosComponent } from './pagina-votos/pagina-votos.component';
import { PautaComponent } from './pauta/pauta.component';
import { PaginaPautaComponent } from './pagina-pauta/pagina-pauta.component';
import { PaginaCadastroComponent } from './pagina-cadastro/pagina-cadastro.component';

const routes: Routes = [
  { path: '', component: PautaComponent},
  { path: 'pagina-votos', component: PaginaVotosComponent},
  { path: 'pagina-pauta', component: PaginaPautaComponent},
  { path: 'pagina-cadastro', component: PaginaCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
