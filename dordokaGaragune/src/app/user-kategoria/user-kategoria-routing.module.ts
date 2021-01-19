import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserKategoriaPage } from './user-kategoria.page';

const routes: Routes = [
  {
    path: '',
    component: UserKategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserKategoriaPageRoutingModule {}
