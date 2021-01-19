import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech, private _toast: ToastController) { }

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

}
