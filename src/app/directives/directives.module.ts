import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaTextoDirective } from './marca-texto.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarcaTextoDirective
  ],
  exports: [
    MarcaTextoDirective
  ]
})
export class DirectivesModule { }
