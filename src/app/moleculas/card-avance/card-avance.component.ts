import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-avance',
  templateUrl: './card-avance.component.html',
  styleUrls: ['./card-avance.component.scss']
})
export class CardAvanceComponent {

  @Input() titulo="";
  @Input() colorTitulo="";
  @Input() colorBoton="";
  @Input() colorBorde="";
}
