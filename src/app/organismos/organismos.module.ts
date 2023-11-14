import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOrgaComponent } from './card-orga/card-orga.component';
import { MoleculasModule } from '../moleculas/moleculas.module';
import { OrgaHeaderComponent } from './orga-header/orga-header.component';
import { FooterComponent } from './footer/footer.component';
import { AtomosModule } from '../atomos/atomos.module';
import { CardAvanComponent } from './card-avan/card-avan.component';
import { FormularioHTMLComponent } from './or-formulario-html/formulario-html.component';



@NgModule({
  declarations: [
    CardOrgaComponent,
    OrgaHeaderComponent,
    FooterComponent,
    CardAvanComponent,
    FormularioHTMLComponent
  ],
  imports: [
    CommonModule,
    MoleculasModule, 
    AtomosModule
  ], exports:[
    CardOrgaComponent,
    OrgaHeaderComponent, 
    FooterComponent,
    CardAvanComponent,
    FormularioHTMLComponent
  
  ]
})
export class OrganismosModule { }
