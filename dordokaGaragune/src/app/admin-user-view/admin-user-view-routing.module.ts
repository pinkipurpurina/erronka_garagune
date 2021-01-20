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
  {
    path: 'kategoriak',
    loadChildren: () => import('../kategoriak-ikusi/kategoriak-ikusi.module').then( m => m.KategoriakIkusiPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUserViewPageRoutingModule {}
