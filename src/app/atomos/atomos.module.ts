import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloHtmlComponent } from './titulo-html/titulo-html.component';
import { TituloCssComponent } from './titulo-css/titulo-css.component';
import { TituloJsComponent } from './titulo-js/titulo-js.component';
import { TituloMetoCssComponent } from './titulo/titulo-meto-css.component';
import { TituloFramFronComponent } from './titulo-fram-fron/titulo-fram-fron.component';
import { TituloAtomDesigComponent } from './titulo-atom-desig/titulo-atom-desig.component';
import { ParrafoComponent } from './parrafo/parrafo.component';
import { BotonComponent } from './boton/boton.component';



@NgModule({
  declarations: [
    TituloHtmlComponent,
    TituloCssComponent,
    TituloJsComponent,
    TituloMetoCssComponent,
    TituloFramFronComponent,
    TituloAtomDesigComponent,
    ParrafoComponent,
    BotonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomosModule { }
