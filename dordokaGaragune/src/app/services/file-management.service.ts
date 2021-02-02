import firebase from 'firebase';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx'
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class FileManagementService {

  usuario: any[] = [];
  usuarioNombre;
  constructor(private fileManager: File) { }

  userFileCreator(uidAdmin: string, uidUser: string) {
    this.usuario = [];
    firebase.database().ref('users/' + uidAdmin + '/erabiltzaileak/' + uidUser).once('value', (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var admin = uidAdmin;
        var data = element.val();
        this.usuario.push({
          uid: uid,
          adminUID:admin,
          data: data,
        });
      });
      this.fileManager.createFile(this.fileManager.dataDirectory,'UserData.txt',true).then(() =>{     
        // this.fileManager.removeFile(this.fileManager.dataDirectory,'UserData.txt');
        this.fileManager.writeFile(this.fileManager.dataDirectory, 'UserData.txt', JSON.stringify(this.usuario)).catch((err) => {
          this.fileManager.writeExistingFile(this.fileManager.dataDirectory, 'UserData.txt', JSON.stringify(this.usuario)).catch((err) => {
            console.log('Ha sucedido un error al escribir en el json', err)
          });
        });
      })
    }).catch((err) => {
      console.log('Ha sucedido un error al crear el json', err);
    });

  }
  getUser(){
    console.log(this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt'))
    return this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt');
  }
}
