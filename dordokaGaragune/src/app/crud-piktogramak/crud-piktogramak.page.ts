import { from } from 'rxjs';
import { onErrorResumeNext } from 'rxjs';
import { ForgotPasswordPage } from "./../forgot-password/forgot-password.page";
import { Component, OnInit } from "@angular/core";
import { File } from "@ionic-native/file/ngx";
import firebase from "firebase";
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import {FitxeroKudeaketaService} from '../services/fitxategi/fitxero-kudeaketa.service'
@Component({
  selector: "app-crud-piktogramak",
  templateUrl: "./crud-piktogramak.page.html",
  styleUrls: ["./crud-piktogramak.page.scss"],
})
export class CrudPiktogramakPage implements OnInit {
  promiseDeFile: any;
  monitor: any[] = [];
  monitorUId: string;
  constructor(private file: File, public firebaseConnect: UsuariosFirebaseService, private data:FitxeroKudeaketaService,) { }

  ngOnInit() { }

  leerData(monitorUID) {
    this.monitorUId = monitorUID;
    this.file
      .checkDir(this.file.dataDirectory, this.monitorUId) //comprobar que existe el directorio
      .then((_) => {
        console.log(
          "1- El directorio: ",
          this.file.dataDirectory,
          this.monitorUId,
          " Existe"
        ); //si existe directorio:
        //comprobar que existe el fichero
        this.file
          .checkFile(this.file.dataDirectory, this.monitorUId+"/" + this.monitorUId + ".json")//***************************** */
          .then((result) => {
            //si existe el fichero:
            console.log(
              "2- El fichero: ",
              this.file.dataDirectory,
              this.monitorUId+"/" + this.monitorUId + ".txt",
              " Existe"
            );

            //leemos y devolvemos contenido-->Promise<string>
            this.leerFichero();
          })
          .catch((err) => {
            //si no existe el fichero:
            console.log(
              "2- El fichero: ",
              this.file.dataDirectory,
              this.monitorUId+"/" + this.monitorUId + ".txt",
              " NO EXISTE. ERROR: ", err
            );
            //leer firebase y añadir el contenido a el fichero que vamos a crear
            this.erabiltzaileakIrakurri();
            //crear fichero y guardar en el fichero
            this.crearFichero();
            //leer fichero
            //leemos y devolvemos contenido-->Promise<string>
            this.leerFichero();
          }); //termina checkfile
      })
      .catch((err) => {//si no existe el directorio:
        console.log("1- El directorio: ",
          this.file.dataDirectory,
          this.monitorUId,
          " NO EXISTE. ERROR: ", err);
        //crear directorio, leer firebase y crear fichero
        this.crearDirectorio().then((_) => {

          this.erabiltzaileakIrakurri()
        }).catch((err) => {
          console.log("crearDirectorio Error: ", err);
        });


      });
  }

  leerFichero() {
    console.log("3- Va ha leer el fichero: ");
    this.monitor=[];
    this.file
      .readAsText(
        this.file.dataDirectory,
        this.monitorUId+"/" + this.monitorUId + ".json"/*************** */
      )
      .then((result) => {
        //window.alert(result); //falta el restro del código
        console.log("4- contenido del fichero", result);
        console.log(this.monitor);
        let jsonObject = JSON.parse(result);
        console.log("Prueba de parseo", jsonObject);
        this.data.monitor=jsonObject;
        
      })
      .catch((err) => {
        console.log("4- No ha leido nada chata");
      });
  }
  leerParte() {

  }


  erabiltzaileakIrakurri() {
    console.log("1.2- Se va conectar a la base de datos");

    this.monitor = [];
    let bookingRes = this.firebaseConnect.erabiltzaileakKargatuPrueba(this.monitorUId);
    return bookingRes.snapshotChanges().subscribe(res => {
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.monitor.push(a);
        console.log(a);
      })
        console.log("1.3- Carga de RTDB:", this.monitor);
        console.log("1.4 -Crear fichero con: ", this.monitor);
        this.crearFichero();//mirar si poner un return y si tiene que ser asinc
    })
  }

  // creacion de ficheros en dataDirectory/userData con monbre del monitor
  crearFichero() {
    console.log("3- Se creará un nuevo fichero. ");
    this.file
      .createFile(
        this.file.dataDirectory,
        this.monitorUId+"/" + this.monitorUId + ".json",/*************** */
        true
      )
      .then((result) => {
        console.log(result);
        this.file
          .writeExistingFile(
            this.file.dataDirectory,
            this.monitorUId+"/" + this.monitorUId + ".json",/********************* */
            JSON.stringify(this.monitor)
          )
          .then((_) => {
            console.log("fichero escrito");
            //leemos y devolvemos contenido-->Promise<string>
            this.leerFichero();
          })
          .catch((err) => {
            console.log("fichero NO escrito. ERROR: ", err);
          });
      })
      .catch((err) => {
        console.log("error de creación de fichero. ERROR: ", err);
      });
  }
  //creacion de directorios en dataDirectory de nombre userData
  crearDirectorio() {
    return this.file
      .createDir(this.file.dataDirectory, this.monitorUId, false)
      .then((_) => {
        console.log(
          "1.2- Directorio nuevo creado: ",
          this.file.dataDirectory,
          this.monitorUId
        );
      })
      .catch((err) => {
        console.log(
          "1.2- Directory NO creado: ",
          this.file.dataDirectory,
          this.monitorUId
        );
      });
  }
}
