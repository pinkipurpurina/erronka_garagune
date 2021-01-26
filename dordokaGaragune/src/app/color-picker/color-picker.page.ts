import { typeofExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { mobiscroll, MbscColorOptions } from "@mobiscroll/angular";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
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
  constructor(
    private modalCtrl: ModalController,
    private FirebaseService: UsuariosFirebaseService
  ) {}
  async print() {
   try {
    this.FirebaseService.updateKategoriaKolorea(this.multi).then(() => {
      
    }).catch((err) => {
       console.log("Error colorpicker -->", err);
    });
    this.modalCtrl.dismiss();
     
   } catch (error) {
    console.log('Error->', error);
   }
  }

  multiSettings: MbscColorOptions = {
    select: "single",
    headerText: "Selecciona el color para la categor'ia",
    display: "top",
    touchUi: false,
  };

  async close() {
    await this.modalCtrl.dismiss();
  }
}
