
import { Data } from "@angular/router";
import { Autores } from "./autores-model";

export interface LivroModel {

  id: number,
  titulo: string,
  anoLancamento: Data,
  autores: Autores[]

}
