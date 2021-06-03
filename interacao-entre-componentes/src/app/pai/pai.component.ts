import { Component, Input, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html'
})
export class PaiComponent {
  // nomes = ['Phil', 'Mark', ' ', 'June'];

  //paises = ['Brasil', 'Estados Unidos', ' ', 'Israel'];

  /*paises = ['Brasil', 'Estados Unidos', 'Japão', 'Israel'];

  @Input() votado: string = "";

  onVoted(votado: string) {
    this.votado = votado;
  }
*/

  @ViewChild(FilhoComponent, { static: false })

  private filhoComponent!: FilhoComponent;

  nome!: string;

  ngAfterViewInit() {
    setTimeout(() => this.nome = this.filhoComponent.nome, 0);
  }

}
