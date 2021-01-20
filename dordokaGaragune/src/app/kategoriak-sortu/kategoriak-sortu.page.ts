import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';

import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';

@Component({
  selector: 'app-kategoriak-sortu',
  templateUrl: './kategoriak-sortu.page.html',
  styleUrls: ['./kategoriak-sortu.page.scss'],
})
export class KategoriakSortuPage implements OnInit {

  constructor(private modalCtrl: ModalController, private authSvc: AuthService, private router: Router, private FirebaseService: UsuariosFirebaseService) { }

  ngOnInit() {
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  async onKategoriaSortu(izenaKategoria) {
    try {
      
      console.log("UID: ", firebase.auth().currentUser.uid);
      console.log("izenaKategoria: ", izenaKategoria.value);
      this.FirebaseService.createKategoria(izenaKategoria.value,firebase.auth().currentUser.uid);
      await this.modalCtrl.dismiss();
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
