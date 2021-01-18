import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategoriakSortuPage } from './kategoriak-sortu.page';

const routes: Routes = [
  {
    path: '',
    component: KategoriakSortuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategoriakSortuPageRoutingModule {}
