import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserViewPageRoutingModule } from './admin-user-view-routing.module';

import { AdminUserViewPage } from './admin-user-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserViewPageRoutingModule
  ],
  declarations: [AdminUserViewPage]
})
export class AdminUserViewPageModule {}
