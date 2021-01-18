import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';

@Component({
  selector: 'app-piktogramak-ikusi',
  templateUrl: './piktogramak-ikusi.page.html',
  styleUrls: ['./piktogramak-ikusi.page.scss'],
})
export class PiktogramakIkusiPage implements OnInit {
  piktogramak: any[]=[];
  constructor(public modalController: ModalController, public firebaseConnect: UsuariosFirebaseService) { }

  ngOnInit() {
    this.irakurriPiktogramak();
  }
  irakurriPiktogramak() {
    console.log("sartu");
    this.firebaseConnect.getPiktogramaList().once("value", (snap) => {
      snap.forEach((element) => {
        console.log("bakoitza---",element.val());
        
        var uid = element.key;
        var data = element.val();
        console.log(uid);
        console.log(data.piktogramaIzena);
        this.piktogramak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }
}
