import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent implements OnChanges {

  @Input() nome!: string;

  ngOnChanges(changes: SimpleChanges){
    console.log(changes.nome);
  }

}
