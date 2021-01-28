import { Component, OnChanges, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
import { Router } from "@angular/router";
import { KategoriakSortuPage } from "../kategoriak-sortu/kategoriak-sortu.page";
import { ColorPickerPage } from "../color-picker/color-picker.page";
import firebase from "firebase";

@Component({
  selector: "app-kategoriak-ikusi",
  templateUrl: "./kategoriak-ikusi.page.html",
  styleUrls: ["./kategoriak-ikusi.page.scss"],
})
export class KategoriakIkusiPage implements OnInit {
  kategoriak: any[] = [];
  ref = firebase.database().ref("/users");
  koloreak: string[] = [];
  constructor(
    public modalController: ModalController,
    public firebaseConnect: UsuariosFirebaseService,
    private router: Router
  ) {
    this.ref.on("child_changed", (snapshot) => {
      console.log("child_changed ::" + snapshot.val());
      this.irakurriKategoriak();
    });
  }

  ngOnInit() {
    this.irakurriKategoriak();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: KategoriakSortuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
  async presentModal2(katUID: string, katObj) {
    this.firebaseConnect.setKategoria(katUID);
    this.firebaseConnect.kategoiaObj = katObj;
    const modal = await this.modalController.create({
      component: ColorPickerPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
  async irakurriKategoriak() {
    this.kategoriak = [];
    this.firebaseConnect.getKategoriaList().once("value", (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var data = element.val();
        this.kategoriak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }

  setPiktograma(uid: string) {
    this.firebaseConnect.setKategoriaUsuario(uid);
    this.router.navigate(["piktogramak"]);
  }

  logDrag(item) {
    let percent = item.getSlidingPercent();
    if (percent > 0) {
      // positive
      console.log("right side");
    } else {
      // negative
      console.log("left side");
    }
    if (Math.abs(percent) > 1) {
      console.log("overscroll");
    }
  }
  delete(id: string) {
    console.log(id);
    if (window.confirm("Do you really want to delete?")) {
      this.firebaseConnect.deleteKategoria(id);
    }
  }
}
