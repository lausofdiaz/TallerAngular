import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  
})
export class BotonComponent {
@Input() colorBoton="";
@Input() idP="";
constructor(private router:Router){}
registro(){
  console.log(this.idP);
  switch (this.idP) {
    case 'uno':
      this.router.navigate(['/registro']);
      break;
    case 'dos':
      this.router.navigate(['/app-pagina-cuatro']);
      break;
    case 'tres':
      this.router.navigate(['/registroJS']);
      break;
    default:
      break;
  }

  
}
}
