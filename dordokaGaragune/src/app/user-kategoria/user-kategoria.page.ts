import { File } from '@ionic-native/file/ngx';
import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kategoria',
  templateUrl: './user-kategoria.page.html',
  styleUrls: ['./user-kategoria.page.scss'],
})
export class UserKategoriaPage implements OnInit{
  userAllData = ''
  usuarioUID:any ="";
  constructor(private _stts: TtsService,private fileManager:File) { 
  }
  hablar(esp: string) {
    this._stts.discurso(esp);
  }
ngOnInit(){
  this.usuarioUID =  this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt').then((text:string) =>{
    this.userAllData = text;
    console.log(JSON.parse(this.userAllData)); });
}
}
