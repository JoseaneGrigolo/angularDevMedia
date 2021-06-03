import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly apiURL!: string;
  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:4200';
  }


  //REQUISIÇÃO GET
  listarTodosProdutos() {
    this.http.get<Produto[]>(`${this.apiURL}/produtos`)
      .subscribe((resultado) => console.log(resultado));
  }
  //REQUISIÇÃO GET por id
  listarProdutoPorId() {
    this.http.get<Produto>(`${this.apiURL}/produtos/1`)
      .subscribe((resultado) => console.log(resultado),
        erro => {
          if (erro.status == 404) {
            console.log('Produto não localizado.');
          }
        }
      );
  }
  //REQUISIÇÃO POST
  adicionarProduto() {
    var produto = new Produto();
    produto.nome = "Cadeira Gamer";
    produto.id = 1;

    this.http.post<Produto>(`${this.apiURL}/produtos`, produto)
      .subscribe(
        (resultado) => {
          console.log(resultado)
        },
        erro => {
          if (erro.status == 400) {
            console.log(erro.error.mensagem);
          }
        }
      );
  }

  //REQUISIÇÃO PUT
  alterarProduto() {
    var produto = new Produto();
    produto.nome = "Smart TV";

    this.http.put(`${this.apiURL}/produtos/1`, produto)
      .subscribe(
        (resultado) => {
          console.log('Produto alterado com sucesso.')
        },
        erro => {
          switch (erro.status) {
            case 400:
              console.log(erro.error.mensagem);
              break;
            case 404:
              console.log('Produto não localizado.');
              break;
          }
        }
      );
  }
  //REQUISIÇÃO DELETE
  excluirProduto() {
    this.http.delete(`${this.apiURL}/produtos/1`)
      .subscribe(
        (resultado) => {
          console.log('Produto excluído com sucesso.');
        },
        erro => {
          if (erro.status == 404) {
            console.log('Produto não localizado.');
          }
        }
      );
  }

}
