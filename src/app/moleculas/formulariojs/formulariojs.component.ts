import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulariojs',
  templateUrl: './formulariojs.component.html',
  styleUrls: ['./formulariojs.component.scss']
})
export class FormulariojsComponent {
  @Input() colorBoton:string="";
  @Input() colorBorde="";
  @Input() colorTitulo="";
}
