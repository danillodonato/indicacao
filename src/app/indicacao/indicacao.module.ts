import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacaoRoutingModule } from './indicacao-routing.module';
import { IndicacaoComponent } from './indicacao.component';
import { ListaModule } from './lista/lista.module';
import { NovaModule } from './nova/nova.module';


@NgModule({
  declarations: [
    IndicacaoComponent
  ],
  imports: [
    CommonModule,
    IndicacaoRoutingModule,
    ListaModule,
    NovaModule
  ]
})
export class IndicacaoModule { }
