import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-kategoria',
  templateUrl: './user-kategoria.page.html',
  styleUrls: ['./user-kategoria.page.scss'],
})
export class UserKategoriaPage implements OnInit{
  kategoriak: any[] = [];

  constructor(private _stts: TtsService, public firebaseConnect: UsuariosFirebaseService, private router: Router) { }

  ngOnInit() {
    this.irakurriKategoriak();
  }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

  irakurriKategoriak() {
    this.firebaseConnect.getKategoriaList().once("value", (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var data = element.val();
        this.kategoriak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }

}
