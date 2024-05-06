import { Colaborador } from "./colaborador.model";
import { Pauta } from "./pauta.model";

export interface VotoModel{
  id: number,
  titulo: Pauta,
  colaborador: Colaborador,
  voto: VotoEnum;
}

export enum VotoEnum{
 Sim = "Sim",
 Nao = "Não"
}
