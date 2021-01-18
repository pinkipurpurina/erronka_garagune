import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiktogramakIkusiPage } from './piktogramak-ikusi.page';

const routes: Routes = [
  {
    path: '',
    component: PiktogramakIkusiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiktogramakIkusiPageRoutingModule {}
