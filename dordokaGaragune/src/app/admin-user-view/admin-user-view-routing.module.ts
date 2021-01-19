import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserViewPage } from './admin-user-view.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUserViewPage
  },
  {
    path: 'admin-crear-usuario',
    loadChildren: () => import('../admin-crear-usuario/admin-crear-usuario.module').then( m => m.AdminCrearUsuarioPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserViewPageRoutingModule {}
