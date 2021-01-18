import { Component, OnInit } from "@angular/core";
import { UsuariosFirebaseService } from "./../services/usuarios-firebase.service";
import { Kategoria, Monitorea } from "../interfaces/usersInterface";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-kategoriak",
  templateUrl: "./kategoriak.page.html",
  styleUrls: ["./kategoriak.page.scss"],
})
export class KategoriakPage implements OnInit {
  usuarioList: string[] = [];
  id: string[] = [];
  postsObservable: Observable<any[]>;
  cosas: any[] = [];
  kategoriak: any[] = [];

  constructor(
    private firebaseConnect: UsuariosFirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.leer();
    //this.kategoriakIrakurri();
  }
  leer() {
    this.firebaseConnect.monitoreakKargatu().once("value", (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var data = element.val();
        console.log(uid);
        console.log(data.erabiltzaileak);
        this.cosas.push({
          uid: uid,
          data: data,
        });
      });
    });
  }
  kategoriakIrakurri() {
    this.cosas.forEach((element) => {
      console.log(element.monitoreIzena);
    });
  }
}
