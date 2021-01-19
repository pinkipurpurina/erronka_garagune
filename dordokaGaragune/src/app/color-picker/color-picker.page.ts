import { typeofExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { mobiscroll, MbscColorOptions } from "@mobiscroll/angular";
import { UsuariosFirebaseService } from '../services/usuarios-firebase.service';
@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.page.html",
  styleUrls: ["./color-picker.page.scss"],
})
export class ColorPickerPage {
  top: string;
  bottom: string;
  anchored: string;
  center: string;
  //multi: Array<string>;
  multi: string;
  fixed: Array<string>;
  luminosity: string;
  setBtn: string;
  setCancel: string;
  prueba1: any;
  bb: any;
  constructor(private modalCtrl: ModalController, private FirebaseService: UsuariosFirebaseService) {}
  async print(algo) {
    // amarillo	#ffeb3c
    // naranja		ff9900
    // rojo		f44437
    // fucsia		ea1e63
    // violeta		9c26b0
    // morau		683ab7
    // indigo		3f51b5
    // celeste		2196f3
    // esmeralda		009788
    // hierva		4baf4f
    // marron oscuro		534741
    // marron claro	7e5d4e
    // gris		9e9e9e
    switch (this.multi) {
      case "#ffeb3c": {
        //statements;
        console.log("1--switch amarillo", this.multi);
        break;
      }
       case "#ff9900": {
        console.log("2--switch naranja", this.multi);
          //statements;
          break;
       }
       case "#ffeb3c": {
        //statements;
        console.log("3--switch rojo", this.multi);
        break;
      }
       case "#ff9900": {
        console.log("4--switch fucsia", this.multi);
          //statements;
          break;
       }
       default: {
          //statements;
          console.log("Gran fallo!!", this.multi);
          break;
       }
    }

    // console.log("fuera--", algo);
    // console.log("fuera2--", this.multi);
    await this.modalCtrl.dismiss();
  }
  multiSettings: MbscColorOptions = {
    select: "single",
    headerText: "Pick your favorite colors",
    display: "top",
    touchUi: false,
  };

  fixedSettings: MbscColorOptions = {
    select: 6,
    display: "top",
    touchUi: false,
  };

  luminositySettings: MbscColorOptions = {
    mode: "refine",
    display: "top",
    touchUi: false,
  };

  setBtnSettings: MbscColorOptions = {
    display: "center",
    touchUi: false,
    buttons: ["set"],
  };

  setCancelSettings: MbscColorOptions = {
    display: "center",
    touchUi: false,
    buttons: ["set", "cancel"],
  };
}
