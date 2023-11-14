import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-avance',
  templateUrl: './boton-avance.component.html',
  styleUrls: ['./boton-avance.component.scss']
})
export class BotonAvanceComponent {
  @Input() colorBoton="";

}
