import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service'

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-admin-crear-usuario',
  templateUrl: './admin-crear-usuario.page.html',
  styleUrls: ['./admin-crear-usuario.page.scss'],
})
export class AdminCrearUsuarioPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private modalCtrl: ModalController, private authSvc: AuthService, private router: Router, private firebase2: UsuariosFirebaseService, public toastController: ToastController) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nick: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async onUserRegister(email, password, nick) {
    try {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
        const user = await this.authSvc.userRegister(email.value, password.value, nick.value);
        this.toastSortu("Usuario creado");
        await this.modalCtrl.dismiss();
      }
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
