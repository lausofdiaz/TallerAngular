import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaUnoComponent } from './pages/pagina-uno/pagina-uno.component';
import { PaginaDosComponent } from './pages/pagina-dos/pagina-dos.component';
import { PaginaTresComponent } from './pages/pagina-tres/pagina-tres.component';
import { PaginaCuatroComponent } from './pages/pagina-cuatro/pagina-cuatro.component';
import { PaginaCincoComponent } from './pages/pagina-cinco/pagina-cinco.component';

const routes: Routes = [
  {path:'',  component:PaginaUnoComponent},
  {path:'paginaDos',  component:PaginaDosComponent},
  {path:'registro',  component:PaginaTresComponent},
 {path:'app-pagina-cuatro',  component:PaginaCuatroComponent}, 
  {path:'registroJS',  component:PaginaCincoComponent}, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
