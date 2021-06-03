import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    //Aqui você pode carregar as notícias
    console.log("ngOnInit: Componente iniciado");
  }

}