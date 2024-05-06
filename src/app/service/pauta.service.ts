import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pauta } from '../model/pauta.model';
import { Colaborador } from '../model/colaborador.model';
import { VotoModel } from '../model/voto.model';

@Injectable({
  providedIn: 'root'
})
export class PautaService {

  private baseUrl = 'http://localhost:8080';
  private buscaPorId = 'http://localhost:8080/pautas';

  constructor(private http: HttpClient) { }

  getPauta(): Observable<Pauta[]>{
    return this.http.get<Pauta[]>(this.baseUrl);
  }

  getPautaById(id: number): Observable<any>{
    return this.http.get<Pauta>(`${this.buscaPorId}/${id}`);
  }

  criarPauta(novaPauta: Pauta): Observable<Pauta>{
    return this.http.post<Pauta>(this.baseUrl, novaPauta);
  }

  votarPauta(idPauta: number, idColaborador: number, voto: string): Observable<VotoModel>{
    const url = `${this.baseUrl}/votos`;
    const body = { idPauta, idColaborador, voto };
    return this.http.post<VotoModel>(url, {body});
  }

}
