import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExemplosRoutingModule } from './exemplos-routing.module';
import { ComponentsComponent } from './components/components.component';
import { ComponentsModule } from '../components/components.module';
import { DirectivesComponent } from './directives/directives.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ExemplosRoutingModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [ComponentsComponent, DirectivesComponent, PipesComponent, CustomPipeComponent],
  exports: [ExemplosRoutingModule],
})
export class ExemplosModule { }
