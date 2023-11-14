import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-formulario',
  templateUrl: './label-formulario.component.html',
  styleUrls: ['./label-formulario.component.scss']
})
export class LabelFormularioComponent {
  @Input() label:string=''
}
