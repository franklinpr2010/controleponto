import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorIntl } from '@angular/material/paginator';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective,
  	TipoPipe,
  	DataPipe
  ],
  //O exports dentro do shared.module vai fazer que a diretiva MascaraDirective seja visivel para outros módulos
  exports: [
  	MascaraDirective,
  	TipoPipe,
    DataPipe
  ],
  providers: [
  	PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
