import firebase from 'firebase';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx'


@Injectable({
  providedIn: 'root'
})
export class FitxeroKudeaketaService {

  monitor: any[] = [];
  uId:string
  constructor(private fileManager: File) { }

  async userFileCreator(uidAdmin: string, uidUser: string) {

    
    this.monitor = [];
    firebase.database().ref('users/' + uidAdmin ).once('value', (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        this.uId= element.key;
        var data = element.val();
        this.monitor.push({
          uid: uid,
          data: data,
        });
      });
      this.fileManager.createFile(this.fileManager.dataDirectory,this.uId+'.txt',true).then(() =>{     
        // this.fileManager.removeFile(this.fileManager.dataDirectory,'UserData.txt');
        this.fileManager.writeFile(this.fileManager.dataDirectory, 'UserData.txt', JSON.stringify(this.monitor)).catch((err) => {
          this.fileManager.writeExistingFile(this.fileManager.dataDirectory, 'UserData.txt', JSON.stringify(this.monitor)).catch((err) => {
            console.log('Ha sucedido un error al escribir en el json', err)
          });
        });
        
      })
    }).catch((err) => {
      console.log('Ha sucedido un error al crear el json', err);
    });

  }
  getUser(){
    return this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt');
  }
}
