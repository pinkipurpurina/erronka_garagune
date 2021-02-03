import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiktogramaEditatuPage } from './piktograma-editatu.page';

const routes: Routes = [
  {
    path: '',
    component: PiktogramaEditatuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiktogramaEditatuPageRoutingModule {}
