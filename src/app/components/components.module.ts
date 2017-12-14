import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploInputComponent } from './exemplo-input/exemplo-input.component'
import { ExemploOutputComponent } from './exemplo-output/exemplo-output.component'
import { FormsModule } from '@angular/forms';
import { ExemploBindingsComponent } from './exemplo-bindings/exemplo-bindings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ExemploInputComponent,
    ExemploOutputComponent,
    ExemploBindingsComponent
  ],
  exports: [
    ExemploInputComponent,
    ExemploOutputComponent,
    ExemploBindingsComponent
  ]
})
export class ComponentsModule { }
