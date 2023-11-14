import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 
  @Input() titulo="";
  @Input() colorTitulo="";
  @Input() colorBoton:string="";
  @Input() colorBorde="";
}
