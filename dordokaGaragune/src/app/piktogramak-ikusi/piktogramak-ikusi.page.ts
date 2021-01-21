import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
// import {
//   AngularFireStorage,
//   AngularFireUploadTask,
// } from "@angular/fire/storage";
// import {
//   AngularFirestore,
//   AngularFirestoreCollection,
// } from "@angular/fire/firestore";
// import { Observable } from "rxjs";
// import { finalize, tap } from "rxjs/operators";

// import { MyData } from "../interfaces/usersInterface";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
import { PiktogramakSortuPage } from "../piktogramak-sortu/piktogramak-sortu.page";
import firebase from "firebase";

@Component({
  selector: "app-piktogramak-ikusi",
  templateUrl: "./piktogramak-ikusi.page.html",
  styleUrls: ["./piktogramak-ikusi.page.scss"],
})
export class PiktogramakIkusiPage implements OnInit {
  ref = firebase.database().ref("/users"); //mirar la ruta bien
  piktogramak: any[] = [];
  constructor(
    public modalController: ModalController,
    private firebaseConnect: UsuariosFirebaseService //igual public?
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
    console.log("sartu");
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
          //irudia:""//kargatu datu basetik irudia
        });
      });
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PiktogramakSortuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
}
