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
    this.kategoriaName = [];
    this.filer.getUser().then((datos) => {
      let array= JSON.parse(datos)[1]['data'];
      for(var i in array){
        this.kategoriaName.push({
          uid:i,
          data:array[i],
        }); 
      }




      // Object.keys(array).forEach(function(key) {
      //   console.log("Pasar", key)
      //   this.kategoriaName.push({
      //     uid:key,
      //     data:array[key]["kategoriaIzena"],
      //   }); 
      // });
    });


 




    // this.kategoriak = [];
    // this.firebaseConnect.getKategoriaList().once("value", (snap) => {
    //   snap.forEach((element) => {
    //     var uid = element.key;
    //     var data = element.val();
    //     this.kategoriak.push({
    //       uid: uid,
    //       data: data,
    //     });
    //   });
    // });









  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }
}
