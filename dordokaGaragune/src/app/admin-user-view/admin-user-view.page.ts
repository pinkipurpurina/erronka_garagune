import { CrudPiktogramakPage } from './../crud-piktogramak/crud-piktogramak.page';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
import { AdminCrearUsuarioPage } from '../admin-crear-usuario/admin-crear-usuario.page';
import { FitxeroKudeaketaService } from '../services/fitxategi/fitxero-kudeaketa.service'

import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import firebase from 'firebase';
@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.page.html',
  styleUrls: ['./admin-user-view.page.scss'],
})
export class AdminUserViewPage implements OnInit {
  private _erabiltzaileak: any[] = this.data.monitor;

  uid: any;
  ref = firebase.database().ref('/users');

  admin: any[] = [];
  constructor(
    public modalController: ModalController,
    public firebaseConnect: UsuariosFirebaseService,
    private router: Router,
    public auth: AuthService,
    public data: FitxeroKudeaketaService
  ) {
    // this.ref.on('child_changed', (snapshot) => {               //No borrar
    //   console.log('child_changed ::' + snapshot.val());
    //   this.erabiltzaileakIrakurri();
    // });
  }
  ngOnInit() {
    //this.firebaseConnect.monitoreUID = firebase.auth().currentUser.uid;
    //this.erabiltzaileakIrakurri();
    this.data.leerData(firebase.auth().currentUser.uid);
  }

  public get erabiltzaileak(): any[] {
    return this._erabiltzaileak;
  }

  public set erabiltzaileak(value: any[]) {
    this._erabiltzaileak = value;
  }

  logTodo() {
    console.log(this._erabiltzaileak);
    this._erabiltzaileak.forEach(element => {
      console.log(element);
    });
  }

  recargar() {
    this.data.leerData(firebase.auth().currentUser.uid);
    console.log("RECARGAR: ", this.erabiltzaileak);
    this.erabiltzaileak = this.data.monitor;
    console.log("RECARGAR: ", this.erabiltzaileak);

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AdminCrearUsuarioPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  erabiltzaileakIrakurri() {
    // this.erabiltzaileak = [];
    let bookingRes = this.firebaseConnect.erabiltzaileakKargatu();
    bookingRes.snapshotChanges().subscribe(res => {
      this.erabiltzaileak = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.erabiltzaileak.push(a);
        console.log(a);
      })
    })
  }
  setErabiltzailea(uid: string) {
    this.firebaseConnect.setUsuarioNormala(uid);
    this.router.navigate(['kategoriak']);
  }

  doRefresh(event) {
    //console.log('Begin async operation');
    //this.erabiltzaileakIrakurri();

    console.log("RELOAD antes: ",this.data.monitor);
   this.data.updateFichero();
   console.log("RELOAD despues: ",this.data.monitor);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
