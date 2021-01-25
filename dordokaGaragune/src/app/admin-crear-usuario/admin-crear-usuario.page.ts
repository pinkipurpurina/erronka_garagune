import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service'

@Component({
  selector: 'app-admin-crear-usuario',
  templateUrl: './admin-crear-usuario.page.html',
  styleUrls: ['./admin-crear-usuario.page.scss'],
})
export class AdminCrearUsuarioPage implements OnInit {

  constructor(private modalCtrl:ModalController,private authSvc: AuthService, private router: Router,private firebase2:UsuariosFirebaseService, public toastController: ToastController) { }

  async close(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

  async onUserRegister(email, password,nick) {
    try {
      const user = await this.authSvc.userRegister(email.value, password.value,nick.value);
      this.toastSortu("Usuario creado");
      await this.modalCtrl.dismiss();
    } catch (error) {
      console.log('Error->', error);
      this.toastSortu("Error. Usuario no creado");
    }
  }
  async toastSortu(mns) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: mns
    });
    toast.present();
  }

}
