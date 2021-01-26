import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCrearUsuarioPageRoutingModule } from './admin-crear-usuario-routing.module';

import { AdminCrearUsuarioPage } from './admin-crear-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCrearUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdminCrearUsuarioPage]
})
export class AdminCrearUsuarioPageModule {}
