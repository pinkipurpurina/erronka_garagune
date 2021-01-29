import { Component, OnInit } from '@angular/core';
import { TtsService } from '../services/tts.service';

@Component({
  selector: 'app-componente-frase',
  templateUrl: './componente-frase.page.html',
  styleUrls: ['./componente-frase.page.scss'],
})
export class ComponenteFrasePage implements OnInit {
  arrayDeTodasLasPalabras;
  constructor(private _stts: TtsService) { }

  ngOnInit() {
  }


  hablarPalabras(){
    this._stts.hablarGrupoDePalabras()
  }
  

  borrarPalabras(){
    this._stts.vaciarGrupoDePalabras()
  }

  getTodasLasPalabras(){
    this._stts.getArrayDePalabrasObservable().subscribe((datos) =>{
      console.log('Algo',datos)
      this.arrayDeTodasLasPalabras = datos
    })
  }
}
