import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Path que é vazio que vai ser redicionado para o /login
 */
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
