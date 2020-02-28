import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//mapear dados dentro do componente
import { ReactiveFormsModule } from '@angular/forms';
//modulo que utilizaremos para fazer conexão com a api externa
import { HttpClientModule } from '@angular/common/http';


//componentes do angular material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//é responsável por centralizar os componentes na tela
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent, LogarComponent } from './components';
import { LoginService } from './services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //formulario reativo ao qual traz ferramentas do angular para dentro do componente
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  declarations: [
  	LoginComponent,
  	LogarComponent
  ],
  providers: [
  	LoginService
  ]
})
export class LoginModule { }
