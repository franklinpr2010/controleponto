import { Component, OnInit } from '@angular/core';
//FormBuilder - ajuda a criar o mapeamento do formulário
//FormGroup - agrupar os componentes, vai mapear os componentes e fazer o mapeamento com o html
//Validators - possui  email, tamanho max e min
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//Exibe mensagem de erro e de sucesso na tela
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Grupo de componentes do componente, fazer o mapeamento entre componente e html
  form: FormGroup;

  constructor(
    //Ajuda a criar e mapear o formulário
    private fb: FormBuilder,
    //Exibir as mensagem de erros ou sucesso na tela
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    //Vai chamar no carregamento da tela
    this.gerarForm();
  }


  /**
   * Confirguração do formulario.
   * primento parametro - vai entrar sempre com o valor vazio
   * segundo parametro - campo sempre requerido e validação de email e valor mínimo de caracteres
   */
  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    // vai ser inválido sempre que os validadores não corresponderem
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          localStorage['token'] = data['data']['token'];
          const usuarioData = JSON.parse(
            atob(data['data']['token'].split('.')[1]));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/funcionario']);
          }
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err['status'] == 401) {
            msg = "Email/senha inválido(s)."
          }
          //vai exibir uma mensagem na tela durante 5 segundos
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }
}
