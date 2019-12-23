import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from "./myfirst.component";
import { MySecondComponent } from "./mysecond.component";
import { MeuSegundoComponenteComponent } from './meu-segundo-componente/meu-segundo-componente.component';
import { MeuTerceiroComponenteComponent } from './meu-segundo-componente/meu-terceiro-componente/meu-terceiro-componente.component';

// Todo componente para ser usado precisa ser importado
// e declarado.

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MeuSegundoComponenteComponent,
    MeuTerceiroComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
