import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriakSortuPageRoutingModule } from './kategoriak-sortu-routing.module';

import { KategoriakSortuPage } from './kategoriak-sortu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriakSortuPageRoutingModule
  ],
  declarations: [KategoriakSortuPage]
})
export class KategoriakSortuPageModule {}
