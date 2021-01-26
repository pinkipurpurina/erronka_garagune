import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPiktogramakPageRoutingModule } from './crud-piktogramak-routing.module';

import { CrudPiktogramakPage } from './crud-piktogramak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPiktogramakPageRoutingModule
  ],
  declarations: [CrudPiktogramakPage]
})
export class CrudPiktogramakPageModule {}
