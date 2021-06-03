import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { DestroyComponent } from './destroy/destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    NoticiaComponent,
    ComponenteFilhoComponent,
    DestroyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
