import { Component, OnChanges, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import { Kategoria } from '../interfaces/usersInterface'
import { Router } from '@angular/router';
import{KategoriakSortuPage} from '../kategoriak-sortu/kategoriak-sortu.page';
import{ColorPickerPage} from '../color-picker/color-picker.page';
import firebase from 'firebase';


@Component({
  selector: 'app-kategoriak-ikusi',
  templateUrl: './kategoriak-ikusi.page.html',
  styleUrls: ['./kategoriak-ikusi.page.scss'],
})
export class KategoriakIkusiPage implements OnInit {
  kategoriak: any[] = [];
  ref = firebase.database().ref('/users');

  customColors:any[]=   [{
  "redcanaglia" :"#ff0000",
  "canaryblue" : "#33ffff"
}];
testColors = {
  first : null,
  second : null,
  third : null
}
koloreak:string[]=[];
  constructor(public modalController: ModalController, public firebaseConnect: UsuariosFirebaseService,
    private router: Router) { 
      // this.ref.on("value", (snapshot) => {
      //   console.log('VALUE ::' + snapshot.val());
      //   this.irakurriKategoriak();
      // });
      this.ref.on("child_changed", (snapshot) => {
        console.log('child_changed ::' + snapshot.val());
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
    return await modal.present();
  }
  async presentModal2(katUID:string,katObj) {
    this.firebaseConnect.setKategoria(katUID);
    this.firebaseConnect.kategoiaObj =katObj;
   // console.log(this.firebaseConnect.kategoiaObj);
    const modal = await this.modalController.create({
      component: ColorPickerPage,
      cssClass: "my-custom-class",
    });
    modal.present();
   // return await modal.present();
  }
 async irakurriKategoriak() {
   this.kategoriak=[];
    console.log("sartu");
    this.firebaseConnect.getKategoriaList().once("value", (snap) => {
      snap.forEach((element) => {
        //console.log("2---", element.val());

        var uid = element.key;
        var data = element.val();
        //console.log(uid);
        //console.log(data.kategoriaIzena);
        this.kategoriak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }

  setPiktograma(uid: string) {
    this.firebaseConnect.setKategoria(uid);
    this.router.navigate(['piktogramak']);
  }

  




}
