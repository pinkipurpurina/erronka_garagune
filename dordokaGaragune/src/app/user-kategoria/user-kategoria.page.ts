import { FileManagementService } from './../services/file-management.service';
import { File } from '@ionic-native/file/ngx';
import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import { AuthService } from '../services/auth.service';
import { MenuModalPage } from '../menu-modal/menu-modal.page';
import { ModalController } from "@ionic/angular";
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-user-kategoria',
  templateUrl: './user-kategoria.page.html',
  styleUrls: ['./user-kategoria.page.scss'],
})
export class UserKategoriaPage implements OnInit {
  nombre;
  kategoriaName: any[] = [];
  constructor(private _stts: TtsService, public firebaseConnect: UsuariosFirebaseService, private authSvc: AuthService, private fileManager: File, public filer: FileManagementService, private router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
    this.getNombre();
    this.getKategoriaName();
  }


  getNombre(){
    this.filer.getUser().then((datos) => {
      this.nombre = JSON.parse(datos)[0]['data'];
    })
  }

  getKategoriaName(){
    this.kategoriaName = [];
    this.filer.getUser().then((datos) => {
      let array= JSON.parse(datos)[1]['data'];
      for(var i in array){
        this.kategoriaName.push({
          uid:i,
          data:array[i],
        }); 
      }
    });
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

  piktograma(piktoUid: string, texto: string){
    this.hablar(texto);
    this.firebaseConnect.setKategoriaUsuario(piktoUid);
    this.firebaseConnect.setKategoriaName(texto);
    this.router.navigate(["user-piktograma"]);
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
