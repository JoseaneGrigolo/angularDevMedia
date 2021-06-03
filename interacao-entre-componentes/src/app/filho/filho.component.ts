import { Component, Input, SimpleChanges, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html'
})
export class FilhoComponent {
 /* private _nome = '';

  @Input()
  set nome(nome: string) {
    this._nome = (nome && nome.trim()) || '<Nome em branco>';
  }

  get nome(): string { 
    return this._nome; 
  }
 

  @Input() pais!: string;

  ngOnChanges(changes: SimpleChanges){
   for(let change in changes)
   {
    this.pais = (changes[change].currentValue && changes[change].currentValue.trim()) || '<País não informado>';
   }
  }
  
  @Input() pais!: string;

  @Output() votado = new EventEmitter<string>();

  vota(pais: string) {
    this.votado.emit(pais);
  }
 */
  nome = 'Clark Kent - Filho';

}
