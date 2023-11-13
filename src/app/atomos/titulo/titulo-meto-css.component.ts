import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-meto-css',
  templateUrl: './titulo-meto-css.component.html',
  styleUrls: ['./titulo-meto-css.component.scss']
})
export class TituloMetoCssComponent {
  @Input() titulo="";
  
}
