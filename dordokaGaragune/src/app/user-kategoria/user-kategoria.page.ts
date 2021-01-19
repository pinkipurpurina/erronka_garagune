import { TtsService } from './../services/tts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kategoria',
  templateUrl: './user-kategoria.page.html',
  styleUrls: ['./user-kategoria.page.scss'],
})
export class UserKategoriaPage {

  constructor(private _stts: TtsService) { }

  hablar(esp: string) {
    this._stts.discurso(esp);
  }

}
