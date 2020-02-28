import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent, LogarComponent } from './components';

export const LoginRoutes: Routes = [

	{
		//quando clicar em /login vai ser redirecionado para cá
		path: 'login',
		//importar o LogarComponent que é o principal do modulo e contem o route-outlet
		component: LogarComponent,
		//Vai carregar o filho que é o LoginComponent
		children: [{ path: '', component: LoginComponent }]
	}
];

@NgModule({
	//Modulo filho da aplicação principal por isso o forChild
  imports: [ RouterModule.forChild(LoginRoutes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {
}
