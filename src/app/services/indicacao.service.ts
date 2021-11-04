import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {
  private lista: any[] = [];
  constructor(
    private http: HttpClient
    ) {}

    get indicacoes() {
      return this.lista;
    }

    listaIndicacoes(): Observable<any[]> {
      return this.http.get<any[]>(`${environment.apiHost}indicacoes`);
    }

    inserir(indicacao: any): Observable<any> {
      return this.http.post<any>(`${environment.apiHost}indicacao`, indicacao);
    }

    alterar(id: any, status: any) {
      let data = {
        id: id,
        status_id: status + 1
      };

      return this.http.post<any>(`${environment.apiHost}indicacao/novo_status`, data);
    }

    deletar(id: any) {
      return this.http.delete<any>(`${environment.apiHost}indicacao/${id}`);
    }

    validarCpf(cpf: any) {
      let data = {
        cpf: cpf
      };

      return this.http.post<any>(`${environment.apiHost}valida_cpf`, data);
    }

    validaEmail(email: any) {
      let data = {
        email: email
      };

      return this.http.post<any>(`${environment.apiHost}valida_email`, data);
    }

}

