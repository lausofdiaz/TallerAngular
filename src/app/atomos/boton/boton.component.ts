import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  
})
export class BotonComponent {
@Input() colorBoton="";
constructor(private router:Router){}
registro(){
  this.router.navigate(['/registro']);  
  
}
}
