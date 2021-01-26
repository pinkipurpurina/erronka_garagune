import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriakSortuPageRoutingModule } from './kategoriak-sortu-routing.module';

import { KategoriakSortuPage } from './kategoriak-sortu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriakSortuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [KategoriakSortuPage]
})
export class KategoriakSortuPageModule {}
