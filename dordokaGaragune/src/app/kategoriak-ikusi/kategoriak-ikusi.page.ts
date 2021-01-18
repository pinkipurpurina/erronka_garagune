import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import { Kategoria } from '../interfaces/usersInterface'
import { Router } from '@angular/router';
import{KategoriakSortuPage} from '../kategoriak-sortu/kategoriak-sortu.page'
@Component({
  selector: 'app-kategoriak-ikusi',
  templateUrl: './kategoriak-ikusi.page.html',
  styleUrls: ['./kategoriak-ikusi.page.scss'],
})
export class KategoriakIkusiPage implements OnInit {
  kategoriak: any[] = [];
  constructor(public modalController: ModalController, public firebaseConnect: UsuariosFirebaseService,
    private router: Router) { }

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
  irakurriKategoriak() {
    console.log("sartu");
    this.firebaseConnect.getKategoriaList().once("value", (snap) => {
      snap.forEach((element) => {
        console.log("2---", element.val());

        var uid = element.key;
        var data = element.val();
        console.log(uid);
        console.log(data.kategoriaIzena);
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
