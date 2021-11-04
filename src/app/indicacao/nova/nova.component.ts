import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IndicacaoService } from 'src/app/services/indicacao.service';

@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.css'],
})
export class NovaComponent implements OnInit {
  cpfApi = {valid: true, invalid: false, error: ""};
  emailApi = {valid: true, invalid: false, error: ""};

  constructor(
    private service: IndicacaoService,
    private router: Router) {}

  ngOnInit(): void {}

  inclui(indicacaoForm: NgForm) {
    if (indicacaoForm.valid) {
      this.service.inserir(indicacaoForm.value).subscribe((indicacao) => {
        this.voltar();
      });
    }
  }

  validaCpf(cpf: any) {   
    if (cpf === '') {
      this.cpfApi = {valid: true, invalid: false, error: ""};
      return;
    };

    this.service.validarCpf(cpf).subscribe((data) => {
      if (!data.status) {
        this.cpfApi = {valid: false, invalid: true, error: data.message};
      } else {
        this.cpfApi = {valid: true, invalid: false, error: ""};
      }
    });
  }

  validaEmail(email: any) {
    if (email === '') {
      this.emailApi = {valid: true, invalid: false, error: ""};
      return;
    };

    this.service.validaEmail(email).subscribe((data) => {    
      if(!data.status) {
        this.emailApi = {valid: false, invalid: true, error: "Email inválido"};
      } else {
        this.emailApi = {valid: true, invalid : false, error: ""};
      }
    });
  }

  voltar() {
    this.router.navigateByUrl('indicacao');
  }
}
