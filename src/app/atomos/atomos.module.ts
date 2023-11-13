import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { ParrafoComponent } from './parrafo/parrafo.component';
import { TituloMetoCssComponent } from './titulo/titulo-meto-css.component';
import { H1HeaderComponent } from './h1-header/h1-header.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { TextFooterComponent } from './text-footer/text-footer.component';
import { RetrocederComponent } from './retroceder/retroceder.component';
import { RegistrarseHTMLComponent } from './registrarse-html/registrarse-html.component';
import { RegistrarseCSSComponent } from './registrarse-css/registrarse-css.component';




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
    RegistrarseCSSComponent
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
    RegistrarseCSSComponent
  ],
  imports: [
    CommonModule
  ] 
 
})
export class AtomosModule { }
