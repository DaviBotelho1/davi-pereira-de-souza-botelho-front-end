import { autorService } from './../../services/autores/autor.service';
import { LivroModel } from '../../models/livro';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/services/livros/livros.service';
import { Autores } from 'src/models/autores-model';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: Autores[] = [];
  livros: LivroModel[] = [];

  erroListaAutor: string ='';
  erroaoRemoverautor: string ='';
  sucessoAoRemoverAutor: string ='';
  erroaoRemoverAutor: string ='';

  constructor(private autorService: autorService) { }

  ngOnInit(): void {
    this.autorService.listarAutor().subscribe(successData=> {
      this.autores = successData
    },error=> {
      this.erroListaAutor = 'Ocorreu um erro ao buscar os livros'
    })
  }

  listaAutor() {
    this.autorService.listarAutor().subscribe(successData => {
      this.autores = successData
    }, error=> {
      this.erroListaAutor = "Ocorreu um erro ao buscar os livros"
    }
    );
  }

  RemocaoAutor(autores: Autores) {
    this.erroaoRemoverAutor = ''
    this.sucessoAoRemoverAutor = ''
    let text = "deseja remover: " + autores.nome

    if(confirm(text) == true) {
      this.autorService.remover(autores.id).subscribe(successData => {
        this.sucessoAoRemoverAutor = "livro: " + autores.nome + " removido com sucesso"
        this.buscaTodos()
      },error =>{
        this.erroaoRemoverautor = "Ocorreu um erro ao remover livro: " + autores.nome
      })
    }
  }

  buscaTodos() {
    this.autorService.listarAutor().subscribe(successData=> {
      this.autores = successData
    },error=> {
      this.erroListaAutor = 'Ocorreu um erro ao buscar os livros'
    })
  }

}
