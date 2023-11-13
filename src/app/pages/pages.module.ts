import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component';
import { OrganismosModule } from '../organismos/organismos.module';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';
import { AtomosModule } from '../atomos/atomos.module';



@NgModule({
  declarations: [
    PaginaUnoComponent,
    PaginaDosComponent
  ],
  imports: [
    CommonModule, 
    OrganismosModule,
    AtomosModule
  ], exports:[
    PaginaUnoComponent,
    PaginaDosComponent
  ]
})
export class PagesModule { }
