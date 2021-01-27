import { ForgotPasswordPage } from "./../forgot-password/forgot-password.page";
import { Component, OnInit } from "@angular/core";
import { File } from "@ionic-native/file/ngx";
import firebase from "firebase";
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
@Component({
  selector: "app-crud-piktogramak",
  templateUrl: "./crud-piktogramak.page.html",
  styleUrls: ["./crud-piktogramak.page.scss"],
})
export class CrudPiktogramakPage implements OnInit {
  promiseDeFile: any;
  monitor: any[] = [];
  monitorUId: string;
  constructor(private file: File,public firebaseConnect: UsuariosFirebaseService) {}

  ngOnInit() {}

  leerData(monitorUID) {
    this.monitorUId = monitorUID;
    this.file
      .checkDir(this.file.dataDirectory, "userData") //comprobar que existe el directorio
      .then((_) => {
        console.log(
          "1- El directorio: ",
          this.file.dataDirectory,
          "userData",
          " Existe"
        ); //si existe directorio:
        //comprobar que existe el fichero
        this.file
          .checkFile(this.file.dataDirectory, "userData/" + monitorUID + ".txt")
          .then((result) => {
            //si existe el fichero:
            console.log(
              "2- El fichero: ",
              this.file.dataDirectory,
              "userData/" + monitorUID + ".txt",
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
              "userData/" + monitorUID + ".txt",
              " NO EXISTE. ERROR: ",err
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
        console.log( "1- El directorio: ",
        this.file.dataDirectory,
        "userData",
        " NO EXISTE. ERROR: ",err);
        //crear directorio, leer firebase y crear fichero
        this.crearDirectorio();
        this.erabiltzaileakIrakurri();
        this.crearFichero(); 
        //leemos y devolvemos contenido-->Promise<string>
        this.leerFichero();
      });
  }

  leerFichero() {
    console.log("3- Va ha leer el fichero: ");
    
    this.file
      .readAsText(
        this.file.dataDirectory,
        "userData/" + this.monitorUId + ".txt"
      )
      .then((result) => {
        //window.alert(result); //falta el restro del código
        console.log("4- contenido del fichero",result);
      })
      .catch((err) => {
        console.log("4- No ha leido nada chata");
      });
  }
  leerFirebase() {
    this.monitor = [];
    firebase
      .database()
      .ref("users/" + this.monitorUId)
      .once("value", (snap) => {
        snap.forEach((element) => {
          var data = element.val();
          console.log("monitor-->", element.key);
          console.log("data-->", data);
          this.monitor.push({
            monitorUId: element.key,
            data: data,
          });
        });
      });
  }


  erabiltzaileakIrakurri() {
    console.log("3- Se va conectar a la base de datos");
    
    this.monitor = [];
    let bookingRes = this.firebaseConnect.erabiltzaileakKargatu();
    bookingRes.snapshotChanges().subscribe(res => {
      this.monitor = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.monitor.push(a);
        console.log(a);
      })
    })
    console.log("carga del documento:", this.monitor);
    
  }



// creacion de ficheros en dataDirectory/userData con monbre del monitor
  crearFichero() {
    console.log("3-Se creará un nuevo fichero. ");
    this.file
    .createFile(
      this.file.dataDirectory,
      "userData/" + this.monitorUId,
      true
    )
    .then((result) => {
      console.log(result);
      this.file
        .writeExistingFile(
          this.file.dataDirectory,
          "userData/" + this.monitorUId,
          JSON.stringify(this.monitor)
        )
        .then((_) => {
          console.log("fichero escrito");
        })
        .catch((err) => {
          console.log("fichero NO escrito");
        });
    })
    .catch((err) => {
      console.log("error de creación de fichero");
    });
  }
  //creacion de directorios en dataDirectory de nombre userData
  crearDirectorio() {
    this.file
      .createDir(this.file.dataDirectory, "userData", false)
      .then((_) => {
        console.log(
          "Directorio nuevo creado: ",
          this.file.dataDirectory,
          "/userData"
        );
      })
      .catch((err) => {
        console.log(
          "'Directory NO creado: ",
          this.file.dataDirectory,
          "/userData"
        );
      });
  }
}
