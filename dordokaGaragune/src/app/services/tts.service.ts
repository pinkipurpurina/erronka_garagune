import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech, private _toast: ToastController,private http: HttpClient) { }
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

  // getArrayDePalabras():Observable<ArrayBuffer>{
  //   return this.http.get<any[]>(this.arrayDePalabras)
  // }

  async agruparMensajes(palabra){
    palabra += " ";
    this.arrayDePalabras += palabra;
  }

  async hablarGrupoDePalabras(){
    this.discurso(this.arrayDePalabras.toString())
  }

  async vaciarGrupoDePalabras(){
    this.arrayDePalabras = [] = [];
    console.log(this.arrayDePalabras)
  }

}
