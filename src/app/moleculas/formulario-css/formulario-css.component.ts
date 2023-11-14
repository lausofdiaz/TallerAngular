import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-css',
  templateUrl: './formulario-css.component.html',
  styleUrls: ['./formulario-css.component.scss']
})
export class orFormularioCSSComponent {
  @Input() colorBoton:string="";
  @Input() colorBorde="";
  @Input() colorTitulo="";
}
