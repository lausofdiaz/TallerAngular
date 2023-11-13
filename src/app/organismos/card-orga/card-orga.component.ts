import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-orga',
  templateUrl: './card-orga.component.html',
  styleUrls: ['./card-orga.component.scss']
})
export class CardOrgaComponent {
@Input() titulo="";
}
