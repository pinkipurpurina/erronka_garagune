import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';

import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';


import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-kategoriak-sortu',
  templateUrl: './kategoriak-sortu.page.html',
  styleUrls: ['./kategoriak-sortu.page.scss'],
})
export class KategoriakSortuPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private modalCtrl: ModalController, private authSvc: AuthService, private router: Router, private FirebaseService: UsuariosFirebaseService, public toastController: ToastController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      izenaKategoria: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  async onKategoriaSortu(izenaKategoria) {
    try {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
        this.FirebaseService.createKategoria(izenaKategoria.value, firebase.auth().currentUser.uid);
        this.toastSortu("Categoría creada");
        await this.modalCtrl.dismiss();
      }
    } catch (error) {
      this.toastSortu("Error")
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
