import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteFrasePageRoutingModule } from './componente-frase-routing.module';

import { ComponenteFrasePage } from './componente-frase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteFrasePageRoutingModule
  ],
  declarations: [ComponenteFrasePage]
})
export class ComponenteFrasePageModule {}
