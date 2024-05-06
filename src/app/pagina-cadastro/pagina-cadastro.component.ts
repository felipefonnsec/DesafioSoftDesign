import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrl: './pagina-cadastro.component.scss'
})
export class PaginaCadastroComponent implements OnInit{

  nome: string = '';
  feedbackMsg!: string;

  constructor(private router: Router, private http: HttpClient){}

  ngOnInit(): void {

  }

  cadastraUsuario(){
    this.http.post('http://localhost:8080/colaborador', {nome: this.nome})
      .subscribe(respose => {
       this.feedbackMsg = 'Colaborador cadastrado:', respose;
          this.nome = '';
        },
        error => {
          this.feedbackMsg = 'Erro ao cadastrar colaborador:', error;
        })
  }

  cadastrar(){
    this.router.navigate(['']);
  }
  voltar(){
    this.router.navigate([''])
  }

}
