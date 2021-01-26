import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PiktogramakIkusiPage } from "./piktogramak-ikusi.page";

const routes: Routes = [
  {
    path: "",
    component: PiktogramakIkusiPage,
  },
  {
    path: "piktogramak-sortu",
    loadChildren: () =>
      import("../piktogramak-sortu/piktogramak-sortu.module").then((m) => m.PiktogramakSortuPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiktogramakIkusiPageRoutingModule {}
