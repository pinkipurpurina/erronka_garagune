import { ComponenteFrasePage } from './../componente-frase/componente-frase.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPiktogramaPageRoutingModule } from './user-piktograma-routing.module';

import { UserPiktogramaPage } from './user-piktograma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPiktogramaPageRoutingModule
  ],
  declarations: [UserPiktogramaPage,ComponenteFrasePage]
})
export class UserPiktogramaPageModule {}
