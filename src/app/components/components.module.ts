import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploInputComponent } from './exemplo-input/exemplo-input.component'
import { ExemploOutputComponent } from './exemplo-output/exemplo-output.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ExemploInputComponent,
    ExemploOutputComponent
  ],
  exports: [
    ExemploInputComponent,
    ExemploOutputComponent
  ]
})
export class ComponentsModule { }
