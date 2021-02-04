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
import firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class UsuariosFirebaseService {
  private _ruta: boolean;
  toastController: any;
  public get ruta(): boolean {
    return this._ruta;
  }
  public set ruta(value: boolean) {
    this._ruta = value;
  }
  usuarioListRef: AngularFireList<any>;
  usuarioRef: AngularFireObject<any>;
  monitoreUID = "re2KbiU45PcouAHb4fThHSbs3dS2";
  erabiltzaileNormalaUID = "re2KbiU45PcouAHb4fThHSbs3dS2";
  kategoriaUID = "-MRKLVnXoBcLjP76TNsC";
  kategoriaUserUID = "";
  kategoriaName: string = "";
  // tslint:disable-next-line: variable-name


  constructor(private db: AngularFireDatabase) {
    this.usuarioListRef = this.db.list("/users");
  }
  private _kategoiaObj = {} as Kategoria;

  public get kategoiaObj() {
    return this._kategoiaObj;
  }
  public set kategoiaObj(value) {
    this._kategoiaObj = value;
  }
  private _piktogramaUID: string;
  public get piktogramaUID(): string {
    return this._piktogramaUID;
  }
  public set piktogramaUID(value: string) {
    this._piktogramaUID = value;
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
      kategoriak: [],
    });
  }
  async toastSortu(mns) {
    const toast = await this.toastController.create({
      color: "dark",
      duration: 2000,
      message: mns,
    });
    toast.present();
  }

  createIkono(ikonoa) {
    this.toastSortu("servicio");
    try {
      this.usuarioListRef = this.db.list(
        "/users/" +
        firebase.auth().currentUser.uid +
        "/erabiltzaileak/" +
        this.erabiltzaileNormalaUID +
        "/kategoriak/" +
        this.kategoriaUID

      );
      return this.usuarioListRef.set("kategoriaIkono", ikonoa);
    } catch (error) {
      console.log(error);
      this.toastSortu("servicio -->fallo");

    }
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
  //kategoriaren kolorea aldatu
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
  //kategoriaren izena aldatu
  updateKategoriaIzena(kategoriaIzena) {
    const x = {} as Kategoria;
    x.kategoriaIzena = kategoriaIzena;
    return this.db
      .list(
        "/users/" +
        firebase.auth().currentUser.uid +
        "/erabiltzaileak/" +
        this.erabiltzaileNormalaUID +
        "/kategoriak/" // kategorien listaren helbidea
      )
      .update(this.kategoriaUID, x); // izena aldatu
  }
  //kategoriaren izena aldatu
  updatePiktogramaIzena(piktogramaIzena: string) {
    const x = {} as Piktograma;
    x.piktogramaIzena = piktogramaIzena;
    return this.db
      .list(
        "/users/" +
        firebase.auth().currentUser.uid +
        "/erabiltzaileak/" +
        this.erabiltzaileNormalaUID +
        "/kategoriak/" +// piktograma listaren helbidea
        this.kategoriaUID +
        "/piktogramak/"
      )
      .update(this.piktogramaUID, x); // izena aldatu
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
    return this.db
      .list("users/" + idAdmin + "/erabiltzaileak")
      .update(idUser, x).then(() => {
        fetch("../../assets/user_template.json").then(res => res.json()).then(json => {
          return this.db.list("users/" + idAdmin + "/erabiltzaileak/" + idUser + "/").update("kategoriak", json)
        });
      });
  }

  // Delete user
  deleteUser(id: string) {
    this.usuarioRef = this.db.object(
      "/users/" +
      firebase.auth().currentUser.uid +
      "/erabiltzaileak/" + // user listaren helbidea
      id
    );
    this.usuarioRef.remove();
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
  }
}
