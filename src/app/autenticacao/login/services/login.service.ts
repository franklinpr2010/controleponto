import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { Login } from '../';

@Injectable()
export class LoginService {

  //path vai fazer o post para autenticação, deve fazer um post para esse endereço com email e a 
  //senha para obter o token de acesso.
  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }
   
  //Observable vai fazer a solicitação na requisição e vai ficar em modo de escuta e 
  //quando o servidor responder ele notificará
  logar(login: Login): Observable<any> {
 	return this.http.post(env.baseUrl + this.PATH, login);
  }

}
