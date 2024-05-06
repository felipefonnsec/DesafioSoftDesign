import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PautaService } from '../service/pauta.service';
import { Pauta } from '../model/pauta.model';

@Component({
  selector: 'app-pauta',
  templateUrl: './pauta.component.html',
  styleUrl: './pauta.component.scss'
})
export class PautaComponent implements OnInit {
    pautas!: Pauta[];

  constructor(private router: Router, private http: HttpClient, private pautaService: PautaService) { }

  ngOnInit(): void {
    this.http.get<Pauta[]>('http://localhost:8080/pautas').subscribe(
      data => {
        this.pautas = data;
      },
      error => {
        console.log('Erro ao obter lista de pautas:', error);
      }
    )
  }

  votar(pauta: {idPauta: number }) {
      this.router.navigate(['/pagina-votos', { idPauta: pauta.idPauta }]);
  }

  cadastrarPauta(){
    this.router.navigate(['/pagina-pauta']);
  }

  cadastrarUsuario(){
    this.router.navigate(['/pagina-cadastro']);
  }

}
