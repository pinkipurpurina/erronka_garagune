import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';

import { UsuariosFirebaseService } from '../services/usuarios-firebase.service'

@Component({
  selector: 'app-admin-crear-usuario',
  templateUrl: './admin-crear-usuario.page.html',
  styleUrls: ['./admin-crear-usuario.page.scss'],
})
export class AdminCrearUsuarioPage implements OnInit {

  constructor(private modalCtrl:ModalController,private authSvc: AuthService, private router: Router,private firebase2:UsuariosFirebaseService) { }

  async close(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

  async onUserRegister(email, password,nick) {
    try {
      const user = await this.authSvc.userRegister(email.value, password.value,nick.value);
      await this.modalCtrl.dismiss();
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
