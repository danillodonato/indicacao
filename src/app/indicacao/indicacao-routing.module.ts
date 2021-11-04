import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicacaoComponent } from './indicacao.component';
import { ListaComponent } from './lista/lista.component';
import { NovaComponent } from './nova/nova.component';

const routes: Routes = [
  {
    path: '',
    component: IndicacaoComponent,
    children: [
      {
        path: '',
        component: ListaComponent
      },
      {
        path: 'nova',
        component: NovaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicacaoRoutingModule { }
