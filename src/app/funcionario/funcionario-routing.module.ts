import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
	FuncionarioComponent,
	LancamentoComponent, 
	ListagemComponent 
} from './components';

export const FuncionarioRoutes: Routes = [
	{
		path: 'funcionario',
		component: FuncionarioComponent,
		children: [
		  {
		    //quando clicar vai diretamente no ponto de trabalho
			path: '', 
			component: LancamentoComponent 
		  },
		  {
			path: 'listagem', 
			component: ListagemComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(FuncionarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionarioRoutingModule {
}



