import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-formulario',
  templateUrl: './input-formulario.component.html',
  styleUrls: ['./input-formulario.component.scss']
})
export class InputFormularioComponent {
  @Input() input:string=''
}
