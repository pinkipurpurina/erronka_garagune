import { Component, OnInit } from '@angular/core';
import { FileManagementService } from '../services/file-management.service';
import { TtsService } from '../services/tts.service';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';

@Component({
  selector: 'app-user-piktograma',
  templateUrl: './user-piktograma.page.html',
  styleUrls: ['./user-piktograma.page.scss'],
})
export class UserPiktogramaPage implements OnInit {
  nombre;
  piktoName: any[] = [];

  constructor(private _stts: TtsService, public firebaseConnect: UsuariosFirebaseService, public filer: FileManagementService) { }

  ngOnInit() {
    this.getNombre();
  }

  getNombre(){
    this.filer.getUser().then((datos) => {
      this.nombre = JSON.parse(datos)[0]['data'];
    })
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

}
