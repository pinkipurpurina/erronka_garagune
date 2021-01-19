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

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireDatabase
  ) {
    this.usuarioListRef = this.db.list("/users");
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

  //  kategoria sortu********************************************
  // createKategoria() {

  //   var x = {} as Kategoria;

  //   x.kategoriaIzena = "dddddd**";
  //   x.piktogramak = [
  //     {
  //       piktogramaIzena: "Piktogramaren izena",
  //       piktogramaHelbidea: "Pictogramaren izena",
  //     },
  //   ];
  //   x.kategoriaIkono = "ddddddd";
  // return this.db.list(
  //     "/users/09SuFe2gNzL7lnq6Mv1CVBA8Z4u1/erabiltzaileak/re2KbiU45PcouAHb4fThHSbs3dS2/kategoriak" // metiendo kategorias de pueba
  //   ).push(x);

  // }

  createKategoria(kategoriaIzena: string, monitorearenUID: string) {
    var x = {} as Kategoria;
    x.kategoriaIzena = kategoriaIzena;

    return this.db
      .list(
        "/users/" +
          monitorearenUID +
          "/erabiltzaileak/" +
          this.erabiltzaileNormalaUID +
          "/kategoriak" // kategorien listaren helbidea
      )
      .push(x); //bat gehitu
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
