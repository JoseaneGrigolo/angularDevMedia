import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formularioCadastro: FormGroup;

  constructor() {

    this.formularioCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'telefone': new FormControl(null, Validators.required),
      'endereco': new FormControl(null, Validators.required)
    });
  }


  onSubmit() {
    let dados = `
  Nome: ${this.formularioCadastro.value.nome}
  Telefone: ${this.formularioCadastro.value.telefone}
  Endereço: ${this.formularioCadastro.value.endereco}`;

    console.log(dados);
  }
}
