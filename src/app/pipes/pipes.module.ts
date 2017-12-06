import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nl2brPipe } from './nl2br.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Nl2brPipe],
  exports: [Nl2brPipe]
})
export class PipesModule { }
