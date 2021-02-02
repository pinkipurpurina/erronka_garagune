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
    await firebase.database().ref('users/' + uidAdmin + '/erabiltzaileak/' + uidUser).once('value', (snap) => {
      snap.forEach((element) => {
        var uid = uidUser;
        var admin = uidAdmin;
        var data = element.val();
        this.usuario.push({
          uid: uid,
          adminUID:admin,
          data: data,
        });
      });
      console.log("user=> ", this.usuario);
    }).catch((err) => {
      console.log('Ha sucedido un error al crear el json', err);
    });

    console.log("empezar funcion");
    await this.fileManager.createFile(this.fileManager.dataDirectory,'UserData.txt',true).then(async () =>{     
        // this.fileManager.removeFile(this.fileManager.dataDirectory,'UserData.txt');
        await this.fileManager.writeFile(this.fileManager.dataDirectory, 'UserData.txt', JSON.stringify(this.usuario)).catch(async (err) => {
          await this.fileManager.writeExistingFile(this.fileManager.dataDirectory, 'UserData.txt', JSON.stringify(this.usuario)).catch((err2) => {
            console.log('Ha sucedido un error al escribir en el json', err, err2)
          });
        });
      });
  }
  getUser(){
    // console.log(this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt'))
    return this.fileManager.readAsText(this.fileManager.dataDirectory,'UserData.txt');
  }
}
