import { ComponenteFrasePage } from './../componente-frase/componente-frase.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { KategoriakIkusiPage } from '../kategoriak-ikusi/kategoriak-ikusi.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'componente-frase',
    component: ComponenteFrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
