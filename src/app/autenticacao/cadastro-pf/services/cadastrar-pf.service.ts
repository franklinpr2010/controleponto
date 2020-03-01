import { Injectable } from '@angular/core';
//Faz a requisição de forma assincrona e notifica o retorno do servidor 
import { Observable } from 'rxjs/Observable';
//Modulo responsável por fazer requisição a API
import { HttpClient } from '@angular/common/http';
//averiguar em qual ambiente está, produção ou developer
import { environment as env } from '../../../../environments/environment';

import { CadastroPf } from '../';

@Injectable()
export class CadastrarPfService {
  //para onde vai enviar a requisição
  private readonly PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
  	  return this.http.post(env.baseApiUrl + this.PATH, cadastroPf);
  }

}
