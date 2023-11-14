import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomosModule } from '../atomos/atomos.module';
import { HeaderComponent } from './header/header.component';
import { CardAvanceComponent } from './card-avance/card-avance.component';
import { FormularioHTMLComponent } from './formulario-html/formulario-html.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    CardAvanceComponent,
    FormularioHTMLComponent
  ],
  imports: [
    CommonModule,
    AtomosModule
  ], 
  exports:[
    CardComponent,
    HeaderComponent,
    CardAvanceComponent,
    FormularioHTMLComponent
  ]
})
export class MoleculasModule { }
