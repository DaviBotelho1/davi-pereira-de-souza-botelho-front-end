import { LivroModel } from 'src/models/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const APIURL = environment.api_url + '/livros';

@Injectable({
  providedIn: 'root'
})

export class LivrosService {
  livro!: LivroModel[];
  constructor(private http: HttpClient) { }
    listarLivros() : Observable<LivroModel[]> {
      return this.http.get<LivroModel[]>(APIURL);
    }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(APIURL + "/" + id)
  }

  atualiza(livros: LivroModel){
    return this.http.put(
      `${APIURL}/livros/alteraLivro`,
      {
        "titulo": livros.titulo,
        "anoLancamento": livros.anoLancamento,
        "autores": livros.autores
      });
  }

}
