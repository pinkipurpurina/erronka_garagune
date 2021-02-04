import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';

@Component({
  selector: 'app-piktograma-editatu',
  templateUrl: './piktograma-editatu.page.html',
  styleUrls: ['./piktograma-editatu.page.scss'],
})
export class PiktogramaEditatuPage implements OnInit {
  piktogramaIzena: string;
  constructor(private modalCtrl: ModalController, private FirebaseService: UsuariosFirebaseService
  ) { }

  ngOnInit() {
  }
  async balidatu() {

    if (this.piktogramaIzena) {
      this.aldatuIzena();
    }
  }
  aldatuIzena() {
    try {
      this.FirebaseService.updatePiktogramaIzena(this.piktogramaIzena)
        .then(() => { })
        .catch((err) => {
          console.log("Error cambio nombre -->", err);
        });
      this.modalCtrl.dismiss();
    } catch (error) {
      console.log("Error->", error);
    }
  }
}
