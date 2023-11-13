import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-avan',
  templateUrl: './card-avan.component.html',
  styleUrls: ['./card-avan.component.scss']
})
export class CardAvanComponent {
  @Input() titulo="";
}
