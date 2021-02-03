import { MenuModalPage } from './../menu-modal/menu-modal.page';
import { PiktogramaEditatuPage } from './../piktograma-editatu/piktograma-editatu.page';
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
import { PiktogramakSortuPage } from "../piktogramak-sortu/piktogramak-sortu.page";
import firebase from "firebase";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { PopoverController } from '@ionic/angular';
@Component({
  selector: "app-piktogramak-ikusi",
  templateUrl: "./piktogramak-ikusi.page.html",
  styleUrls: ["./piktogramak-ikusi.page.scss"],
})
export class PiktogramakIkusiPage implements OnInit {
  ref = firebase.database().ref("/users"); //mirar la ruta bien y ajustarla
  piktogramak: any[] = [];
  constructor(
    public modalController: ModalController,
    private firebaseConnect: UsuariosFirebaseService, //igual public?
    private router: Router,
    public auth: AuthService,
    public popoverController: PopoverController
  ) {
    this.ref.on("child_changed", (snapshot) => {
      console.log("child_changed ::" + snapshot.val());
      this.irakurriPiktogramak();
    });
  }

  ngOnInit() {
    this.irakurriPiktogramak();
  }

  irakurriPiktogramak() {
    this.piktogramak=[]
    this.firebaseConnect.getPiktogramaList().once("value", (snap) => {
      snap.forEach((element) => {
        console.log("bakoitza---", element.val());
        var uid = element.key;
        var data = element.val();
        console.log("UID--", uid);
        console.log("IZENA--", data.piktogramaIzena);
        console.log("HELBIDEA--", data.piktogramaHelbidea);
        this.piktogramak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }
  async presentModal() {
    this.firebaseConnect.ruta=false;
    const modal = await this.modalController.create({
      component: PiktogramakSortuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
  async presentModalEdit(piktogramaUid) {
    this.firebaseConnect.piktogramaUID=piktogramaUid;
    const modal = await this.modalController.create({
      component: PiktogramaEditatuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
  //delete piktograma
  delete(id: string) {
    console.log("que id llega:  ",id);
    if (window.confirm("Do you really want to delete?")) {
      this.firebaseConnect.deletePiktograma(id);
     // this.irakurriPiktogramak();
    }
  }
  
  async salir(){
    await this.auth.logout();
    this.router.navigate(['login']);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuModalPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
