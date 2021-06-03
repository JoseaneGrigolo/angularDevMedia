import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereco}`;

    console.log(dados);
  }
}
