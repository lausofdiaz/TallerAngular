import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaUnoComponent } from './pagina-uno/pagina-uno.component';
import { OrganismosModule } from '../organismos/organismos.module';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';
import { AtomosModule } from '../atomos/atomos.module';
import { PaginaTresComponent } from './pagina-tres/pagina-tres.component';
import { PaginaCuatroComponent } from './pagina-cuatro/pagina-cuatro.component';
import { PaginaCincoComponent } from './pagina-cinco/pagina-cinco.component';



@NgModule({
  declarations: [
    PaginaUnoComponent,
    PaginaDosComponent,
    PaginaTresComponent,
    PaginaCuatroComponent,
    PaginaCincoComponent
  ],
  imports: [
    CommonModule, 
    OrganismosModule,
    AtomosModule
  ], exports:[
    PaginaUnoComponent,
    PaginaDosComponent,
    PaginaTresComponent,
    PaginaCuatroComponent,
    PaginaCincoComponent
  ]
})
export class PagesModule { }
