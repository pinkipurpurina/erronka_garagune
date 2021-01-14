import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserViewPage } from './admin-user-view.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserViewPageRoutingModule {}
