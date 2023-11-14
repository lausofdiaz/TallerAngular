import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomosModule } from '../atomos/atomos.module';
import { HeaderComponent } from './header/header.component';
import { CardAvanceComponent } from './card-avance/card-avance.component';
import { FormularioHTMLComponent } from './formulario-html/formulario-html.component';
import { orFormularioCSSComponent } from './formulario-css/formulario-css.component';
import { FormulariojsComponent } from './formulariojs/formulariojs.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    CardAvanceComponent,
    FormularioHTMLComponent,
    orFormularioCSSComponent,
    FormulariojsComponent
  ],
  imports: [
    CommonModule,
    AtomosModule
  ], 
  exports:[
    CardComponent,
    HeaderComponent,
    CardAvanceComponent,
    FormularioHTMLComponent,
    orFormularioCSSComponent,
    FormulariojsComponent
  ]
})
export class MoleculasModule { }
