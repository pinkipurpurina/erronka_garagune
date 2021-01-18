import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriakIkusiPageRoutingModule } from './kategoriak-ikusi-routing.module';

import { KategoriakIkusiPage } from './kategoriak-ikusi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriakIkusiPageRoutingModule
  ],
  declarations: [KategoriakIkusiPage]
})
export class KategoriakIkusiPageModule {}
