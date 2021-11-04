import { Component, OnInit } from '@angular/core';
import { IndicacaoService } from 'src/app/services/indicacao.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  indicacoes: any[] = [];

  constructor(
    private service: IndicacaoService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listaIndicacoes().subscribe(indicacoes => this.indicacoes = indicacoes);
  }

  alteraStatus(id: number, status: number) {
    if(confirm('Deseja alterar o status da indicação?'))
      this.service.alterar(id, status).subscribe(indicacao=>{
        this.listar();
      });
  }

  remove(id: number) {
    if(confirm('Deseja realmente excluir a indicação?'))
      this.service.deletar(id).subscribe(indicacao=>{
        this.listar();
      });
  }
}
