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
  nombre: string;
  piktoName: any[] = [];

  constructor(private _stts: TtsService, public firebaseConnect: UsuariosFirebaseService, public filer: FileManagementService) { }

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
      console.log("Array=> ",array);
      for(var i in array){
        console.log("Array[]=> ",array[i]);
        this.piktoName.push({
          uid:i,
          data:array[i],
        }); 
      }
    });
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

}
