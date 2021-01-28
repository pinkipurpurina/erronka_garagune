import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPiktogramaPage } from './user-piktograma.page';

const routes: Routes = [
  {
    path: '',
    component: UserPiktogramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPiktogramaPageRoutingModule {}
