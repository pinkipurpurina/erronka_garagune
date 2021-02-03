import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KategoriakIkusiPage } from './kategoriak-ikusi.page';
const routes: Routes = [
  {
    path: '',
    component: KategoriakIkusiPage
  },
  {
    path: 'piktogramak',
    loadChildren: () => import('../piktogramak-ikusi/piktogramak-ikusi.module').then( m => m.PiktogramakIkusiPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriakIkusiPageRoutingModule {}
