import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudPiktogramakPage } from './crud-piktogramak.page';

const routes: Routes = [
  {
    path: '',
    component: CrudPiktogramakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPiktogramakPageRoutingModule {}
