import { Component, OnInit } from '@angular/core';
import { TtsService } from '../services/tts.service';

@Component({
  selector: 'app-componente-frase',
  templateUrl: './componente-frase.page.html',
  styleUrls: ['./componente-frase.page.scss'],
})
export class ComponenteFrasePage implements OnInit {
  constructor(public _stts: TtsService) { }

  ngOnInit() {
  }


  async hablarPalabras(){
    this._stts.hablarGrupoDePalabras()
  }
  

  async borrarPalabras(){
    this._stts.vaciarGrupoDePalabras()
  }

  async hablar(esp: string) {
    this._stts.discurso(esp);

  }

}
