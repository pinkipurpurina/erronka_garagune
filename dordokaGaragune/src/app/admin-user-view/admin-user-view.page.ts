
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../services/auth.service'
import { ModalController } from "@ionic/angular";
import { database } from "firebase";
import { AdminCrearUsuarioPage } from "../admin-crear-usuario/admin-crear-usuario.page";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";

@Component({
  selector: "app-admin-user-view",
  templateUrl: "./admin-user-view.page.html",
  styleUrls: ["./admin-user-view.page.scss"],
})
export class AdminUserViewPage implements OnInit {
  erabiltzaileak: any[] = [];
  uid: any;
  admin: any[] = [];
  constructor(
    public modalController: ModalController,
    public firebaseConnect: UsuariosFirebaseService, 
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    // this.firebaseConnect.createKategoria();
    
    this.erabiltzaileakIrakurri();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AdminCrearUsuarioPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  

  erabiltzaileakIrakurri() {
    
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
    location.reload();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  
}
