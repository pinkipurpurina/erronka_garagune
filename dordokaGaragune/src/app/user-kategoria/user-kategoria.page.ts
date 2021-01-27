import { FileManagementService } from './../services/file-management.service';
import { File } from '@ionic-native/file/ngx';
import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kategoria',
  templateUrl: './user-kategoria.page.html',
  styleUrls: ['./user-kategoria.page.scss'],
})
export class UserKategoriaPage implements OnInit {
  nombre;
  kategorias;
  constructor(private _stts: TtsService, private fileManager: File, public filer: FileManagementService) { }

  ngOnInit() {
    this.getNombre();
    this.getKategoria()
  }

  getNombre(){
    this.filer.getUser().then((datos) => {
      this.nombre = JSON.parse(datos)[0]['data'];
    })
  }

  getKategoria(){
    this.filer.getUser().then((datos) => {
      this.kategorias = JSON.parse(datos)[1]['data'];
      console.log(this.kategorias)
    })
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }
}
