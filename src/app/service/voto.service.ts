import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VotoModel } from '../model/voto.model';
import { Pauta } from '../model/pauta.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotoService {
  private apiUrl: string = 'http://localhost:8080/votos';
  private apiBusca: string = 'http://localhost:8080/pautas';

  constructor(private http: HttpClient) { }

  obterPautaPorId(idPauta: number){

  }

  enviarVoto(voto: VotoModel): Observable<VotoModel> {
    return this.http.post<VotoModel>(`${this.apiUrl}`, voto);
  }
}
