import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { ParrafoComponent } from './parrafo/parrafo.component';
import { TituloMetoCssComponent } from './titulo/titulo-meto-css.component';
import { H1HeaderComponent } from './h1-header/h1-header.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { TextFooterComponent } from './text-footer/text-footer.component';

import { RegistrarseHTMLComponent } from './registrarse-html/registrarse-html.component';
import { RegistrarseCSSComponent } from './registrarse-css/registrarse-css.component';
import { BotonAvanceComponent } from './boton-avance/boton-avance.component';
import { TituloAvanceComponent } from './titulo-avance/titulo-avance.component';
import { MoleculasModule } from '../moleculas/moleculas.module';
import { LabelFormularioComponent } from './label-formulario/label-formulario.component';
import { InputFormularioComponent } from './input-formulario/input-formulario.component';
import { RetrocederCSSComponent } from './retroceder-css/retroceder-css.component';
import { RetrocederJSComponent } from './retroceder-js/retroceder-js.component';
import { RetrocederComponent } from './retroceder/retroceder.component';




@NgModule({
  declarations: [
    BotonComponent,
    ParrafoComponent,
    TituloMetoCssComponent,
    H1HeaderComponent,
    MisCursosComponent,
    TextFooterComponent,
    RetrocederComponent,
    RegistrarseHTMLComponent,
    RegistrarseCSSComponent,
    BotonAvanceComponent,
    TituloAvanceComponent,
    LabelFormularioComponent,
    InputFormularioComponent,
    RetrocederCSSComponent,
    RetrocederJSComponent
  ],
  exports:[
    BotonComponent,
    ParrafoComponent,
    TituloMetoCssComponent,
    H1HeaderComponent,
    MisCursosComponent,
    TextFooterComponent,
    RetrocederComponent,
    RegistrarseHTMLComponent,
    RegistrarseCSSComponent,
    BotonAvanceComponent,
    TituloAvanceComponent,
    LabelFormularioComponent,
    InputFormularioComponent,
    RetrocederCSSComponent,
    RetrocederJSComponent
  ],
  imports: [
    CommonModule
  ] 
 
})
export class AtomosModule { }
