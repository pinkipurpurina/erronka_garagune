import {
  Monitorea,
  Erabiltzailea,
  Kategoria,
  Piktograma,
} from "./../interfaces/usersInterface";
import { Injectable } from "@angular/core";

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/database";
import { stringify } from "@angular/compiler/src/util";
import firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class UsuariosFirebaseService {
  usuarioListRef: AngularFireList<any>;
  usuarioRef: AngularFireObject<any>;
  erabiltzaileNormalaUID: string = "re2KbiU45PcouAHb4fThHSbs3dS2";
  kategoriaUID: string = "-MRKLVnXoBcLjP76TNsC";
  private _kategoiaObj = {} as Kategoria;
 
  constructor(
    private db: AngularFireDatabase,
   
  ) {
    this.usuarioListRef = this.db.list("/users");
  
  }
  public get kategoiaObj() {
    return this._kategoiaObj;
  }
  public set kategoiaObj(value) {
    this._kategoiaObj = value;
  }
  setKategoria(kategoriaUID: string) {
    this.kategoriaUID = kategoriaUID;
  }
  setUsuarioNormala(usuarioNormalaUID: string) {
    this.erabiltzaileNormalaUID = usuarioNormalaUID;
  }

  getKategoriaList() {
    console.log(this.erabiltzaileNormalaUID); //whYVI3YAsyT8YlvtXUTZo4VftMy2

    return firebase
      .database()
      .ref(
        "/users/" +
          firebase.auth().currentUser.uid +
          "/erabiltzaileak/" +
          this.erabiltzaileNormalaUID +
          "/kategoriak"
      );
  }
  getPiktogramaList() {
    return firebase
      .database()
      .ref(
        "/users/" +
          firebase.auth().currentUser.uid +
          "/erabiltzaileak/" +
          this.erabiltzaileNormalaUID +
          "/kategoriak/" +
          this.kategoriaUID +
          "/piktogramak"
      );
  }

  erabiltzaileakKargatu(): any {
    return firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid + "/erabiltzaileak");
  }

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  //console.log(makeid(5));

  // Create Erabiltzaile
  createUsuario(apt: any) {
    console.log(this);
    console.log(this.usuarioRef);
    console.log(this.usuarioListRef);

    var idCreate = "12012021" + this.makeid(16);
    var idPic = "12012021" + this.makeid(16);
    var idKat = "12012021" + this.makeid(16);
    var monitorearenUId = "";
    this.usuarioListRef = this.db.list(
      "/users/-MQptEJuTP67l8RQES6K/" + /*monitorearenUId+*/ "erabiltzaileak/"
    );
    return this.usuarioListRef.push({
      //usuarios con discapacidad
      id: idCreate,
      erabiltzaileIzena: "Erabiltzailearen izena****",
      kategoriak: [] /* [
            {
              idKategoria: idKat,
              kategoriaIzena: "Kategoriaren izena",
              KategoriaIkono: "ikonoarenHelbidea",
  
              piktogramak: [
                {
                  idPic: idPic,
                  piktogramaIzena: "Piktogramaren izena",
                  piktogramaHelbidea: "Pictogramaren izena",
                },
              ],
            },
          ]*/,
    });
  }

  // Create Piktograma
  createPiktograma(path: string, name: string) {
    this.usuarioListRef = this.db.list(
      "/users/" +
        firebase.auth().currentUser.uid +
        "/erabiltzaileak/" +
        this.erabiltzaileNormalaUID +
        "/kategoriak/" +
        this.kategoriaUID +
        "/piktogramak"
    );
    return this.usuarioListRef.push({
      piktogramaIzena: name,
      piktogramaHelbidea: path,
    });
  }



  createKategoria(kategoriaIzena: string, monitorearenUID: string) {
    var x = {} as Kategoria;
    x.kategoriaIzena = kategoriaIzena;
    return this.db
      .list(
        "/users/" +
          monitorearenUID +// firebase.auth().currentUser.uid +
          "/erabiltzaileak/" +
          this.erabiltzaileNormalaUID +
          "/kategoriak" // kategorien listaren helbidea
      )
      .push(x); //bat gehitu
  }
  updateKategoriaKolorea(kategoriaKolorea ) {
      var x = {} as Kategoria;
    x.kolorea = kategoriaKolorea;
    return this.db
      .list(
        "/users/" +
        firebase.auth().currentUser.uid +
          "/erabiltzaileak/" +
          this.erabiltzaileNormalaUID +
          "/kategoriak/" // kategorien listaren helbidea
      )
      .update(this.kategoriaUID,x); //bat gehitu
  }
  //create datos de admin google
  createUsuarioAdmin(id: any, name: any) {
    return this.usuarioListRef.push({
      uIdMonitorea: id,
      monitoreIzena: name,
      erabiltzaileak: [],
    });
  }
  //create datos de admin google
  public createUsuarioAdminconId(id: any, name: string) {
    console.log(id, name);

    var x = {} as Monitorea;
    x.monitoreIzena = name;
    x.erabiltzaileak = [];
    return this.usuarioListRef.update(id, x);
  }

  public createUsuarioNormal(id: any, name: string, idAdmin: any) {
    console.log(id, name);

    var x = {} as Erabiltzailea;

    x.erabiltzaileIzena = name;
    x.kategoriak = [];
    //return this.db.list('users/'+idAdmin+'/erabiltzaileak/'+id).push(name);
    return this.db.list("users/" + idAdmin + "/erabiltzaileak").update(id, x);
  }
}
