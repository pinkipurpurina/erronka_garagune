import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { AdminCrearUsuarioPage } from '../admin-crear-usuario/admin-crear-usuario.page';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service'

@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.page.html',
  styleUrls: ['./admin-user-view.page.scss'],
})
export class AdminUserViewPage implements OnInit {

  erabiltzaileak: any[] = [];

  constructor(public modalController: ModalController, public firebaseConnect: UsuariosFirebaseService) { }

  ngOnInit() {
    this.leer();
  }

   async presentModal() {
    const modal = await this.modalController.create({
      component: AdminCrearUsuarioPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  leer() {
    this.firebaseConnect.erabiltzaileakKargatu().once("value", (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var data = element.val();
        console.log(uid);
        console.log(data.erabiltzaileIzena);
        this.erabiltzaileak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }

}
