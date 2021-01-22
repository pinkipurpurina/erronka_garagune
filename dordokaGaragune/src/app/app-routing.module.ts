import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },{
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-user-view',
    loadChildren: () => import('./admin-user-view/admin-user-view.module').then( m => m.AdminUserViewPageModule)
  },
  {
    path: 'admin-crear-usuario',
    loadChildren: () => import('./admin-crear-usuario/admin-crear-usuario.module').then( m => m.AdminCrearUsuarioPageModule)
  },
  {
    path: 'kategoriak',
    loadChildren: () => import('./kategoriak-ikusi/kategoriak-ikusi.module').then( m => m.KategoriakIkusiPageModule)
  },
  {
    path: 'piktogramak',
    loadChildren: () => import('./piktogramak-ikusi/piktogramak-ikusi.module').then( m => m.PiktogramakIkusiPageModule)
  },

  {
    path: 'kategoriak-sortu',
    loadChildren: () => import('./kategoriak-sortu/kategoriak-sortu.module').then( m => m.KategoriakSortuPageModule)
  },
  {
    path: 'color-picker',
    loadChildren: () => import('./color-picker/color-picker.module').then( m => m.ColorPickerPageModule)
  },


  {
    path: 'user-kategoria',
    loadChildren: () => import('./user-kategoria/user-kategoria.module').then( m => m.UserKategoriaPageModule)
  },
  {
    path: 'crud-piktogramak',
    loadChildren: () => import('./crud-piktogramak/crud-piktogramak.module').then( m => m.CrudPiktogramakPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
