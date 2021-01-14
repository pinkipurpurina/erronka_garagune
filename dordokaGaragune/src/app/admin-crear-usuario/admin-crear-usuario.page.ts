import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-admin-crear-usuario',
  templateUrl: './admin-crear-usuario.page.html',
  styleUrls: ['./admin-crear-usuario.page.scss'],
})
export class AdminCrearUsuarioPage implements OnInit {

  constructor(private modalCtrl:ModalController,private authSvc: AuthService, private router: Router) { }

  async close(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

  async onUserRegister(email, password,nick) {
    try {
      const user = await this.authSvc.register(email.value, password.value,nick.value);
      await this.modalCtrl.dismiss();
    console.log("UID: ", firebase.auth().currentUser.uid);
    console.log("EMAIL: ", firebase.auth().currentUser.email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
