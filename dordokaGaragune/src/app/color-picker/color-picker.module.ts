import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { ColorPickerPageRoutingModule } from "./color-picker-routing.module";

import { ColorPickerPage } from "./color-picker.page";

import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "../app.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColorPickerPageRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [ColorPickerPage],
})
export class ColorPickerPageModule {}
