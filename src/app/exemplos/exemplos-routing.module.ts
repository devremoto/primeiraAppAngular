import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {
    path: 'exemplos', children: [
      { path: '', component: ComponentsComponent },
      { path: 'componentes', component: ComponentsComponent },
      { path: 'diretivas', component: DirectivesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExemplosRoutingModule { }
