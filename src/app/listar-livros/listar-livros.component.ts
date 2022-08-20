
import { Component, OnInit } from '@angular/core';
import { Autores } from 'src/models/autores-model';
import { LivroModel } from 'src/models/livro';
import { LivrosService } from 'src/services/livros/livros.service';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  autores: Autores[] = [];
  livros: LivroModel[] = [];

  erroListaLivro: string ='';
  erroAoRemoverLivro: string ='';
  sucessoAoRemoverLivro: string ='';
  erroaoRemoverLivro: string ='';

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.buscaTodos();
  }

  listaLivros() {
    this.livrosService.listarLivros().subscribe(successData => {
      this.livros = successData
    }, error=> {
      this.erroListaLivro = "Ocorreu um erro ao buscar os livros"
    }
    );
  }

  RemocaoLivro(livro: LivroModel) {
    this.erroAoRemoverLivro = ''
    this.sucessoAoRemoverLivro = ''
    let text = "deseja remover: " + livro.titulo

    if(confirm(text) == true) {
      this.livrosService.remover(livro.id).subscribe(successData => {
        this.sucessoAoRemoverLivro = "livro: " + livro.titulo + " removido com sucesso"
        this.buscaTodos()
      },error =>{
        this.erroaoRemoverLivro = "Ocorreu um erro ao remover livro: " + livro.titulo
      })
    }
  }

  buscaTodos() {
    this.livrosService.listarLivros().subscribe(successData=> {
      this.livros = successData
    },error=> {
      this.erroListaLivro = 'Ocorreu um erro ao buscar os livros'
    })
  }

}
