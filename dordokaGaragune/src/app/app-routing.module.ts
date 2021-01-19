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
<<<<<<< HEAD
  
=======
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



>>>>>>> d069724f4d57eb99be3da087c4527b251acdcde9
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
