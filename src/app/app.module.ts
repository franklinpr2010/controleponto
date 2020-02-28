import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {
  LoginModule,
  LoginRoutingModule,
  CadastroPjModule,
  CadastroPjRoutingModule,
  CadastroPfModule,
  CadastroPfRoutingModule
} from './autenticacao';
//importando o routing principal
import { AppRoutingModule } from './app-routing.module';
import {
  FuncionarioModule,
  FuncionarioRoutingModule
} from './funcionario';
import {
  AdminModule,
  AdminRoutingModule
} from './admin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    LoginModule,
    //Modulo filho Routing de login sendo importado.
    LoginRoutingModule,
    CadastroPjModule,
    //Modulo filho Routing de cadastro Pj sendo importado.
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
