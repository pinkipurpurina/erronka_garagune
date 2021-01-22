import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import { ModalController } from "@ionic/angular";
import { AdminCrearUsuarioPage } from "../admin-crear-usuario/admin-crear-usuario.page";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
import firebase from "firebase";
@Component({
  selector: "app-admin-user-view",
  templateUrl: "./admin-user-view.page.html",
  styleUrls: ["./admin-user-view.page.scss"],
})
export class AdminUserViewPage implements OnInit {
  erabiltzaileak: any[] = [];
  uid: any;
  ref = firebase.database().ref("/users");

  constructor(
    public modalController: ModalController,
    public firebaseConnect: UsuariosFirebaseService, 
    private router: Router
  ){
    this.ref.on("child_changed", (snapshot) => {
      console.log("child_changed ::" + snapshot.val());
      this.erabiltzaileakIrakurri();
    });
  }
  ngOnInit() {
    this.erabiltzaileakIrakurri();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AdminCrearUsuarioPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async erabiltzaileakIrakurri() {
    this.erabiltzaileak=[]
    this.firebaseConnect.erabiltzaileakKargatu().once("value", (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var data = element.val();
        console.log(uid);
        console.log(data.erabiltzaileIzena);
        console.log(element.val());
        this.erabiltzaileak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }
  setErabiltzailea(uid:string) {
    this.firebaseConnect.setUsuarioNormala(uid);
    this.router.navigate(['kategoriak']);
  }

 
  doRefresh(event) {
    console.log('Begin async operation');
   // this.erabiltzaileakIrakurri();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
