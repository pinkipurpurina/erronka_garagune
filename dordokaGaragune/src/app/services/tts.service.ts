import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech, private _toast: ToastController) { }
  arrayDePalabras: any[] = [];
  discurso(texto: string) {
    this._tts.speak({
      text: texto,
      locale: 'es-ES',
      rate: 1
    });
  }

  async mensaje(texto: string) {
    const toast = await this._toast.create({
      message: texto,
      duration: 2000
    });
    toast.present();
  }

  async agruparMensajes(palabra, imagen) {
    palabra += " ";
    this.arrayDePalabras.push({ nombre: palabra, foto: imagen });
  }

  async hablarGrupoDePalabras() {
    let frase = '';
    this.arrayDePalabras.forEach(element => {
      frase += element['nombre'].toString()
    });
    this.discurso(frase)
  }

  async vaciarGrupoDePalabras() {
    this.arrayDePalabras = [] = [];
  }


  async borrarLaUltimaPalabra() {
    this.arrayDePalabras.pop()
  }
}
