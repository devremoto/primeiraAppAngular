import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { BindingsComponent } from './bindings/bindings.component';

const routes: Routes = [
  {
    path: 'exemplos', children: [
      { path: '', component: ComponentsComponent },
      { path: 'componentes', component: ComponentsComponent },
      { path: 'diretivas', component: DirectivesComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'custompipe', component: CustomPipeComponent },
      { path: 'bindings', component: BindingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemplosRoutingModule { }
