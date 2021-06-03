import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diretivas Estruturais';
  public exibirConteudo = false;

  public toggleConteudo(){
    this.exibirConteudo = !this.exibirConteudo;
  }
}
