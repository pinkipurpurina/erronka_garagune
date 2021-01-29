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
  monitoreUID = "re2KbiU45PcouAHb4fThHSbs3dS2";
  erabiltzaileNormalaUID = "re2KbiU45PcouAHb4fThHSbs3dS2";
  kategoriaUID = "-MRKLVnXoBcLjP76TNsC";
  kategoriaUserUID ="";
  kategoriaName: string ="";
  // tslint:disable-next-line: variable-name
  private _kategoiaObj = {} as Kategoria;

  constructor(private db: AngularFireDatabase) {
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
  setKategoriaName(name: string) {
    this.kategoriaName = name;
  }
  setKategoriaUsuario(kategoriaUID: string) {
    this.kategoriaUserUID = kategoriaUID;
  }
  setUsuarioNormala(usuarioNormalaUID: string) {
    this.erabiltzaileNormalaUID = usuarioNormalaUID;
  }

  getKategoriaList() {
    console.log("erabiltzailea->", this.erabiltzaileNormalaUID);
    console.log("firebase->", firebase.auth().currentUser.uid);

    return firebase.database().ref(
      "/users/" +
      // firebase.auth().currentUser.uid +
      this.monitoreUID +
      "/erabiltzaileak/" +
      this.erabiltzaileNormalaUID +
      "/kategoriak"
    );
    // .ref("/users/" + firebase.auth().currentUser.uid + "/erabiltzaileak/" + this.erabiltzaileNormalaUID + "/kategoriak");
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
    console.log("hau da zure ID-a:", firebase.auth().currentUser.uid);
    this.usuarioListRef = this.db.list(
      "/users/" +
        /*firebase.auth().currentUser.uid*/ this.monitoreUID +
      "/erabiltzaileak"
    );
    return this.usuarioListRef;
  }

  getAdminErabiltzaile(): any {
    return firebase.database().ref("/users/" + firebase.auth().currentUser.uid);
    // return firebase
    //   .database()
    //   .ref('/users/' + JSON.parse(localStorage.getItem('user')).uid);
  }
  makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  // console.log(makeid(5));

  // Create Erabiltzaile
  createUsuario(apt: any) {
    console.log(this);
    console.log(this.usuarioRef);
    console.log(this.usuarioListRef);

    const idCreate = "12012021" + this.makeid(16);
    const idPic = "12012021" + this.makeid(16);
    const idKat = "12012021" + this.makeid(16);
    const monitorearenUId = "";
    this.usuarioListRef = this.db.list(
      "/users/-MQptEJuTP67l8RQES6K/" + /*monitorearenUId+*/ "erabiltzaileak/"
    );
    return this.usuarioListRef.push({
      // usuarios con discapacidad
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
    const x = {} as Kategoria;
    x.kategoriaIzena = kategoriaIzena;
    return this.db
      .list(
        "/users/" +
        monitorearenUID + // firebase.auth().currentUser.uid +
        "/erabiltzaileak/" +
        this.erabiltzaileNormalaUID +
        "/kategoriak" // kategorien listaren helbidea
      )
      .push(x); // bat gehitu
  }
  updateKategoriaKolorea(kategoriaKolorea) {
    const x = {} as Kategoria;
    x.kolorea = kategoriaKolorea;
    return this.db
      .list(
        "/users/" +
        firebase.auth().currentUser.uid +
        "/erabiltzaileak/" +
        this.erabiltzaileNormalaUID +
        "/kategoriak/" // kategorien listaren helbidea
      )
      .update(this.kategoriaUID, x); // bat gehitu
  }
  // create datos de admin google
  createUsuarioAdmin(id: any, name: any) {
    return this.usuarioListRef.push({
      uIdMonitorea: id,
      monitoreIzena: name,
      erabiltzaileak: [],
    });
  }
  // create datos de admin google
  public createUsuarioAdminconId(id: any, name: string) {
    console.log(id, name);

    const x = {} as Monitorea;
    x.monitoreIzena = name;
    x.erabiltzaileak = [];
    return this.usuarioListRef.update(id, x);
  }

  public createUsuarioNormal(name: string, idAdmin: any, idUser: string) {
    const x = {} as Erabiltzailea;
    x.erabiltzaileIzena = name;
    x.kategoriak = [];
    // return this.db.list('users/'+idAdmin+'/erabiltzaileak/'+id).push(name);
    return this.db.list("users/" + idAdmin + "/erabiltzaileak").update(idUser, x);
  }
  // Delete kategoria
  deleteKategoria(id: string) {
    this.usuarioRef = this.db.object(
      "/users/" +
      firebase.auth().currentUser.uid +
      "/erabiltzaileak/" +
      this.erabiltzaileNormalaUID +
      "/kategoriak/" + // kategorien listaren helbidea
      id
    );
    this.usuarioRef.remove();
    console.log(id + "removed!");
  }
  // Delete piktograma
  deletePiktograma(id: string) {
    this.usuarioRef = this.db.object(
      "/users/" +
      firebase.auth().currentUser.uid +
      "/erabiltzaileak/" +
      this.erabiltzaileNormalaUID +
      "/kategoriak/" + // kategorien listaren helbidea
      this.kategoriaUID +
      "/piktogramak/" +
      id
    );
    this.usuarioRef.remove();

    console.log(
      "/users/" +
      firebase.auth().currentUser.uid +
      "/erabiltzaileak/" +
      this.erabiltzaileNormalaUID +
      "/kategoriak/" + // kategorien listaren helbidea
      this.kategoriaUID +
      "/piktogramak/" +
      id)
    console.log(id + " --removed!");

  }
}
