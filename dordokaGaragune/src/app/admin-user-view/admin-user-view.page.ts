
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
import { AdminCrearUsuarioPage } from '../admin-crear-usuario/admin-crear-usuario.page';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import firebase from 'firebase';
@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.page.html',
  styleUrls: ['./admin-user-view.page.scss'],
})
export class AdminUserViewPage implements OnInit {
  erabiltzaileak: any[] = [];
  uid: any;
  ref = firebase.database().ref('/users');

  admin: any[] = [];
  constructor(
    public modalController: ModalController,
    public firebaseConnect: UsuariosFirebaseService,
    private router: Router,
    public auth: AuthService
  ) {
    // this.ref.on('child_changed', (snapshot) => {               //No borrar
    //   console.log('child_changed ::' + snapshot.val());
    //   this.erabiltzaileakIrakurri();
    // });
  }

  ngOnInit() {
    this.firebaseConnect.monitoreUID = firebase.auth().currentUser.uid;
    this.erabiltzaileakIrakurri();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AdminCrearUsuarioPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  erabiltzaileakIrakurri() {
    this.erabiltzaileak = [];
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
    console.log('Begin async operation');
    this.erabiltzaileakIrakurri();
    console.log(this.erabiltzaileak);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  delete(id: string) {
    console.log(id);
    if (window.confirm("Do you really want to delete?")) {
      this.firebaseConnect.deleteUser(id);
    }
  }

  async salir(){
    await this.auth.logout();
    this.router.navigate(['login']);
  }
}
