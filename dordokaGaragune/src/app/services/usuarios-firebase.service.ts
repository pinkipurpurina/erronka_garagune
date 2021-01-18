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

@Injectable({
  providedIn: "root",
})
export class UsuariosFirebaseService {
  usuarioListRef: AngularFireList<any>;
  usuarioRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.usuarioListRef = this.db.list("/users");
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
  createPiktograma(apt: any) {
    console.log(this);
    console.log(this.usuarioRef);
    console.log(this.usuarioListRef);
    
    var idCreate = "12012021" + this.makeid(16);
    var idPic = "12012021" + this.makeid(16);
    var idKat = "12012021" + this.makeid(16);
    var monitorearenUId = "";
    this.usuarioListRef = this.db.list(
      "/users/-MQptEJuTP67l8RQES6K/" +
        /*monitorearenUId+*/ "erabiltzaileak/0/kategoriak/0/piktogramak"
    );
    return this.usuarioListRef.push({
      idPic: idPic,
      piktogramaIzena: "Piktogramaren izena",
      piktogramaHelbidea: "Pictogramaren izena****",
    });
  }

  // editatu kategoria********************************************
  createKategoria(apt: any) {
    console.log(this);
    console.log(this.usuarioRef);
    console.log(this.usuarioListRef);

    var idCreate = "12012021" + this.makeid(16);
    var idPic = "12012021" + this.makeid(16);
    var idKat = "12012021" + this.makeid(16);
    var monitorearenUId = "";
    this.usuarioListRef = this.db.list(
      "/users/-MQq8A9xnvbSzOtyd9aG/erabiltzaileak/0/kategoriak/"// queriendo editar el 0
    );

    var x = {} as Kategoria;
    //x.idKategoria = "ñlajsdhlaksjdh";
    //usuarioRef=
    x.kategoriaIzena = "dddddd**";
    x.piktogramak = [];
    x.KategoriaIkono = "ddddddd";
    return this.usuarioListRef.update( "Erik",x);//
  }

  //create datos de admin google
  createUsuarioAdmin(id: any,name: any) 
  {
    return this.usuarioListRef.push(
      {
      uIdMonitorea: id,
      monitoreIzena: name,
      erabiltzaileak: [],
      }
    );
  }
   //create datos de admin google
   public createUsuarioAdminconId(id: any,name: string) 
   {
     console.log(id, name);
     
    var x = {} as Monitorea;
    x.monitoreIzena=name;
    x.erabiltzaileak=[];
    return this.usuarioListRef.update(id,x);
   }

   public createUsuarioNormal(id: any,name: string, idAdmin: any) 
   {
     console.log(id, name);
     
    var x = {} as Erabiltzailea;
    
    x.erabiltzaileIzena=name;
    x.kategoriak=[];
    //return this.db.list('users/'+idAdmin+'/erabiltzaileak/'+id).push(name);
    return this.db.list('users/'+idAdmin+'/erabiltzaileak').update(id,x);
   }
}
