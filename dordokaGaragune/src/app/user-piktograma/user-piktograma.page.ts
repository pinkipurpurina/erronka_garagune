import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModalPage } from '../menu-modal/menu-modal.page';
import { AuthService } from '../services/auth.service';
import { FileManagementService } from '../services/file-management.service';
import { TtsService } from '../services/tts.service';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import { ModalController } from "@ionic/angular";
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-user-piktograma',
  templateUrl: './user-piktograma.page.html',
  styleUrls: ['./user-piktograma.page.scss'],
})
export class UserPiktogramaPage implements OnInit {
  nombre: string;
  piktoName: any[] = [];

  constructor(private _stts: TtsService, public filem: FileManagementService, private authSvc: AuthService, public firebaseConnect: UsuariosFirebaseService, public filer: FileManagementService, private router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
    this.getNombre();
    this.getPiktogramak();
  }

  getNombre(){
    this.nombre = this.firebaseConnect.kategoriaName;
  }

  getPiktogramak(){
    this.piktoName = [];
    this.filer.getUser().then((datos) => {
      let array= JSON.parse(datos)[1]['data'][this.firebaseConnect.kategoriaUserUID]['piktogramak'];
      for(var i in array){
        this.piktoName.push({
          uid:i,
          data:array[i],
        }); 
      }
    });
  }

  anadirPalabra(palabra,imagen){
    this._stts.agruparMensajes(palabra,imagen)
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

  async salir(){
    this.filem.eliminar();
    // await this.authSvc.logout();
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
