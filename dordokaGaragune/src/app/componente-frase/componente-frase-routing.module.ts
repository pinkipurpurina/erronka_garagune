import { UserKategoriaPage } from './../user-kategoria/user-kategoria.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteFrasePage } from './componente-frase.page';

const routes: Routes = [
  {
    path: 'componente-frase',
    component: ComponenteFrasePage,
    children: [
      {
        path: 'componente-frase/categoria',
        loadChildren: () => import('../user-kategoria/user-kategoria.module').then(m => m.UserKategoriaPageModule)
      },
      {
        path: 'piktograma',
        loadChildren: () => import('../user-piktograma/user-piktograma.module').then(m => m.UserPiktogramaPageModule)
      },
      {
        path: 'componente-frase',
        redirectTo: 'componente-frase/categoria',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'componente-frase',
    redirectTo: 'componente-frase/categoria',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteFrasePageRoutingModule {}
