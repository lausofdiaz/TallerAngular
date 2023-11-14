import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss']
})
export class MisCursosComponent {

  constructor(private router:Router){}
  
  clicAvance(){
    this.router.navigate(['/paginaDos']);
     console.log('Clic en Mis Cursos');
    
    
  }
}
