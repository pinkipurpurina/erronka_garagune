import { ForgotPasswordPage } from './../forgot-password/forgot-password.page';
import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-crud-piktogramak',
  templateUrl: './crud-piktogramak.page.html',
  styleUrls: ['./crud-piktogramak.page.scss'],
})
export class CrudPiktogramakPage implements OnInit {
  promiseDeFile: any;
  constructor(private file: File) { }

  ngOnInit() {
  }

  crearFichero() {
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => {
      console.log('Directory exists')

      this.file.createFile(this.file.dataDirectory , 'mydir/miFicheroPrueba.txt', true).then((result) => {
        console.log(result);
        this.file.writeExistingFile(this.file.dataDirectory , 'mydir/miFicheroPrueba.txt', "hola mundo cruel").then(_ => {
          console.log("fichero escrito");

        }).catch((err) => {
          console.log("fichero NO escrito");
        });;

      }).catch((err) => {
        console.log("error de creación de fichero");

      });

    }).catch(err => {

      console.log("'Directory dosent exist'")
      this.file.createDir(this.file.dataDirectory, 'mydir', false).then(_ => console.log('Directory exists2')).catch((err) => {

        console.log("'Directory no creado'")

      });
    }
    );

  }

  leerFichero(){
    this.file.readAsText(this.file.dataDirectory , 'mydir/miFicheroPrueba.txt').then((result) => {
      window.alert(result);
      console.log(result);
      
    }).catch((err) => {
      console.log("no ha leido nada chata");
      
    });



  }

}
