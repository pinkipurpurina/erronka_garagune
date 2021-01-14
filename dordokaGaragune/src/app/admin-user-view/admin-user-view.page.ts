import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { AdminCrearUsuarioPage } from '../admin-crear-usuario/admin-crear-usuario.page';

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.page.html',
  styleUrls: ['./admin-user-view.page.scss'],
})
export class AdminUserViewPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

   async presentModal() {
    const modal = await this.modalController.create({
      component: AdminCrearUsuarioPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
