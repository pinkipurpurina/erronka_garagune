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
  kategoriaName: any[] = [];
  constructor(private _stts: TtsService, private fileManager: File, public filer: FileManagementService) { }

  ngOnInit() {
    this.getNombre();
    this.getKategoriaName()
    console.log(this.kategoriaName) 
  }

  getNombre(){
    this.filer.getUser().then((datos) => {
      this.nombre = JSON.parse(datos)[0]['data'];
    })
  }

  getKategoriaName(){
    this.filer.getUser().then((datos) => {
      const array= JSON.parse(datos)[1]['data']
      Object.keys(array).forEach(function(key) {
        this.kategoriaName.push({data:array[key]})  
      })  
      
    })
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }
}
