import { File } from '@ionic-native/file/ngx';
import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kategoria',
  templateUrl: './user-kategoria.page.html',
  styleUrls: ['./user-kategoria.page.scss'],
})
export class UserKategoriaPage implements OnInit{
  nombre:string ;
  constructor(private _stts: TtsService,private fileManager:File) { }

  ngOnInit(){
    this.getUserName()
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

  getUserName(){
    this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt').then((datos) =>{
      this.nombre = JSON.parse(datos)[0]['data']
    }); 
  }
}
