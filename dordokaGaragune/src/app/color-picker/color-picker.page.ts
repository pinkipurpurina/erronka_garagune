import { typeofExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EventEmitter, Input, Output } from "@angular/core";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.page.html",
  styleUrls: ["./color-picker.page.scss"],
})
export class ColorPickerPage {
  @Input() heading: string;
  @Input() color: string;
  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  public show = false;
  public defaultColors: string[] = [
    "#ffffff",
    "#000105",
    "#3e6158",
    "#3f7a89",
    "#96c582",
    "#b7d5c4",
    "#bcd6e7",
    "#7c90c1",
    "#9d8594",
    "#dad0d8",
    "#4b4fce",
    "#4e0a77",
    "#a367b5",
    "#ee3e6d",
    "#d63d62",
    "#c6a670",
    "#f46600",
    "#cf0500",
    "#efabbd",
    "#8e0622",
    "#f0b89a",
    "#f0ca68",
    "#62382f",
    "#c97545",
    // "#c1800b",
  ];
  kategoriaIzena: string;
  constructor(
    private modalCtrl: ModalController,
    private FirebaseService: UsuariosFirebaseService
  ) {}

  async close() {
    await this.modalCtrl.dismiss();
  }
  esan(kolorea) {
    console.log(kolorea);
    this.color = kolorea;
  }
  async balidatu() {
    if (this.color) {
      console.log("cambio de color");
      this.aldatuKolorea();
    } else {
      console.log("NO entra color");
    }

    if (this.kategoriaIzena) {
      console.log("cambio de nombre");
      this.aldatuIzena();
    } else {
      console.log("no entra");
    }
  }

  aldatuKolorea() {
    try {
      this.FirebaseService.updateKategoriaKolorea(this.color)
        .then(() => {})
        .catch((err) => {
          console.log("Error colorpicker -->", err);
        });
      this.modalCtrl.dismiss();
    } catch (error) {
      console.log("Error->", error);
    }
  }

  aldatuIzena() {
    try {
      this.FirebaseService.updateKategoriaIzena(this.kategoriaIzena)
        .then(() => {})
        .catch((err) => {
          console.log("Error cambio nombre -->", err);
        });
      this.modalCtrl.dismiss();
    } catch (error) {
      console.log("Error->", error);
    }
  }
}
