import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-html',
  templateUrl: './formulario-html.component.html',
  styleUrls: ['./formulario-html.component.scss']
})
export class FormularioHTMLComponent {
  @Input() colorBoton:string="";
  @Input() colorBorde="";
  @Input() colorTitulo="";
}
