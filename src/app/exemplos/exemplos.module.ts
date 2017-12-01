import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExemplosRoutingModule } from './exemplos-routing.module';
import { ComponentsComponent } from './components/components.component';
import { ComponentsModule } from '../components/components.module';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ExemplosRoutingModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [ComponentsComponent, DirectivesComponent],
  exports: [ExemplosRoutingModule],
})
export class ExemplosModule { }
