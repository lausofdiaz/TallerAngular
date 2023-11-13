import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AtomosModule } from '../atomos/atomos.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AtomosModule
  ], 
  exports:[
    CardComponent,
    HeaderComponent
  ]
})
export class MoleculasModule { }
