import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiktogramaEditatuPageRoutingModule } from './piktograma-editatu-routing.module';

import { PiktogramaEditatuPage } from './piktograma-editatu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiktogramaEditatuPageRoutingModule
  ],
  declarations: [PiktogramaEditatuPage]
})
export class PiktogramaEditatuPageModule {}
