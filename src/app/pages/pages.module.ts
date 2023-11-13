import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component';
import { OrganismosModule } from '../organismos/organismos.module';



@NgModule({
  declarations: [
    PaginaUnoComponent
  ],
  imports: [
    CommonModule, 
    OrganismosModule
  ], exports:[
    PaginaUnoComponent
  ]
})
export class PagesModule { }
