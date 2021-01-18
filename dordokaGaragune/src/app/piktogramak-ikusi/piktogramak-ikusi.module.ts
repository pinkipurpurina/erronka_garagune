import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiktogramakIkusiPageRoutingModule } from './piktogramak-ikusi-routing.module';

import { PiktogramakIkusiPage } from './piktogramak-ikusi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiktogramakIkusiPageRoutingModule
  ],
  declarations: [PiktogramakIkusiPage]
})
export class PiktogramakIkusiPageModule {}
