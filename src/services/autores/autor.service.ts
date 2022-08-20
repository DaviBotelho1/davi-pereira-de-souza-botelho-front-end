import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autores } from 'src/models/autores-model';


const APIURL = environment.api_url + '/autores';

@Injectable({
  providedIn: 'root'
})

export class autorService {
  livro!: Autores[];
  constructor(private http: HttpClient) { }
  listarAutor() : Observable<Autores[]> {
      return this.http.get<Autores[]>(APIURL);
    }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(APIURL + "/" + id)
  }

}
