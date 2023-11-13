import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomosModule } from '../atomos/atomos.module';
import { HeaderComponent } from './header/header.component';
import { CardAvanceComponent } from './card-avance/card-avance.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    CardAvanceComponent
  ],
  imports: [
    CommonModule,
    AtomosModule
  ], 
  exports:[
    CardComponent,
    HeaderComponent,
    CardAvanceComponent
  ]
})
export class MoleculasModule { }
