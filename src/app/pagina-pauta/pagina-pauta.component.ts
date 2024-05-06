import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PautaService } from '../service/pauta.service';
import { Pauta } from '../model/pauta.model';

@Component({
  selector: 'app-pagina-pauta',
  templateUrl: './pagina-pauta.component.html',
  styleUrl: './pagina-pauta.component.scss'
})
export class PaginaPautaComponent {

  titulo: string = '';
  feedbackMsg!: string;

  constructor(private router: Router, private http: HttpClient, private pautaService: PautaService){}

  cadastraPauta(){
    if(!this.titulo.trim()){
      this.feedbackMsg = 'Nome da pauta não pode estar vazia.';
      return;
    }
    this.http.post('http://localhost:8080/pautas', {titulo: this.titulo}).subscribe( respose => {
      this.feedbackMsg = 'Pauta cadastrada com sucesso, volte a pagina', respose;
      this.titulo = '';
    }, error => {
      this.feedbackMsg = 'Ocorreu algum erro!'
    })
  }

  voltar(){
    this.router.navigate(['']);
  }

}
