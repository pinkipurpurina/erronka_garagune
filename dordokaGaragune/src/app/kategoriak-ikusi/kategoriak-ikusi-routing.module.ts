import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriakIkusiPage } from './kategoriak-ikusi.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriakIkusiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriakIkusiPageRoutingModule {}
