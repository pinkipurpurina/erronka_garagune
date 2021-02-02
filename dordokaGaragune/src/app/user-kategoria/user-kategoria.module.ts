import { ComponenteFrasePage } from './../componente-frase/componente-frase.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserKategoriaPageRoutingModule } from './user-kategoria-routing.module';

import { UserKategoriaPage } from './user-kategoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserKategoriaPageRoutingModule,
  ],
  declarations: [UserKategoriaPage,ComponenteFrasePage]
})
export class UserKategoriaPageModule {}
