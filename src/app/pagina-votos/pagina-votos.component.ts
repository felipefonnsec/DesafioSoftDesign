import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pauta } from '../model/pauta.model';
import { PautaService } from '../service/pauta.service';

@Component({
  selector: 'app-pagina-votos',
  templateUrl: './pagina-votos.component.html',
  styleUrl: './pagina-votos.component.scss'
})
export class PaginaVotosComponent implements OnInit{
  pauta!: Pauta;
  titulo!: string;
  idPauta!: number;
  opcaoVoto!: string;
  idColaborador!: number;
  timerRunning: boolean = false;
  private timer: any;
  feedbackMsg!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pautaService: PautaService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPauta = +params['idPauta'];
      this.carregaDetalhePauta();
    })
  }

  carregaDetalhePauta(){
    this.pautaService.getPautaById(this.idPauta).subscribe(pauta => {
      this.pauta = pauta;
    });
  }

  confirmarVoto(): void{
    if(this.opcaoVoto){
      this.pautaService.votarPauta(this.idPauta, this.idColaborador, this.opcaoVoto).subscribe(() => {
        this.feedbackMsg = 'Voto enviado com sucesso!';
      }, error => {
        this.feedbackMsg = 'Erro ao enviar voto!';
      });
      this.iniciarTemporizador();
    } else {
      this.feedbackMsg = 'Selecione uma opção de voto antes de confirmar.';
    }
  }

  iniciarTemporizador(): void {
    this.timerRunning = true;
    this.timer = setTimeout(() => {
      localStorage.setItem('botaoBloqueado', 'true');
    }, 60000); // 1 minuto
  }

  pararTemporizador(): void {
    clearTimeout(this.timer);
    this.timerRunning = false;
  }

  voltar(){
    this.router.navigate(['']);
  }

}
