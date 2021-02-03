import { AuthService } from './../services/auth.service';
import { Component, OnChanges, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";
import { Router } from "@angular/router";
import { KategoriakSortuPage } from "../kategoriak-sortu/kategoriak-sortu.page";
import { ColorPickerPage } from "../color-picker/color-picker.page";
import firebase from "firebase";
import { PiktogramakSortuPage } from "../piktogramak-sortu/piktogramak-sortu.page";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Kategoria } from "../interfaces/usersInterface";
import { PopoverController } from '@ionic/angular';
import { CrudPiktogramakPage } from "../crud-piktogramak/crud-piktogramak.page";
@Component({
  selector: "app-kategoriak-ikusi",
  templateUrl: "./kategoriak-ikusi.page.html",
  styleUrls: ["./kategoriak-ikusi.page.scss"],
})
export class KategoriakIkusiPage implements OnInit {
  picNombre: string;
  izena: string;
  img: any;
  argazkia: string;
  kategoriak: any[] = [];
  ref = firebase.database().ref("/users");
  koloreak: string[] = [];
  private _kategoria: Kategoria;
  public get kategoria(): Kategoria {
    return this._kategoria;
  }
  public set kategoria(value: Kategoria) {
    this._kategoria = value;
  }
  constructor(
    public modalController: ModalController,
    public firebaseConnect: UsuariosFirebaseService,
    private router: Router,
    private camera: Camera,
    public auth: AuthService,
    public toastController: ToastController,
    public popoverController: PopoverController
 
  ) {
    this.ref.on("child_changed", (snapshot) => {
      console.log("child_changed ::" + snapshot.val());
      this.irakurriKategoriak();
    });
  }

  ngOnInit() {
    this.irakurriKategoriak();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: KategoriakSortuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
  async presentModal2(katUID: string, katObj) {
    this.firebaseConnect.setKategoria(katUID);
    this.firebaseConnect.kategoiaObj = katObj;
    const modal = await this.modalController.create({
      component: ColorPickerPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }

  async presentModal3() {
    this.firebaseConnect.ruta=true;
    const modal = await this.modalController.create({
      component: PiktogramakSortuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
 
  async presentModal4() {
    this.firebaseConnect.ruta=true;
    const modal = await this.modalController.create({
      component: PiktogramakSortuPage,
      cssClass: "my-custom-class",
    });
    modal.present();
  }
 

  async irakurriKategoriak() {
    this.kategoriak = [];
    this.firebaseConnect.getKategoriaList().once("value", (snap) => {
      snap.forEach((element) => {
        var uid = element.key;
        var data = element.val();
        this.kategoriak.push({
          uid: uid,
          data: data,
        });
      });
    });
  }

  setPiktograma(uid: string) {
    this.firebaseConnect.setKategoria(uid);
    this.router.navigate(["piktogramak"]);
  }

  logDrag(item) {
    let percent = item.getSlidingPercent();
    if (percent > 0) {
      // positive
      console.log("right side");
    } else {
      // negative
      console.log("left side");
    }
    if (Math.abs(percent) > 1) {
      console.log("overscroll");
    }
  }
  delete(id: string) {
    console.log(id);
    if (window.confirm("Do you really want to delete?")) {
      this.firebaseConnect.deleteKategoria(id);
    }
  }
  ikonoaIpini(kategoria) {
    this.firebaseConnect.kategoriaUID=kategoria.uid;
    this._kategoria = kategoria;
    console.log("variables1: ",kategoria.uid);
    console.log("variables2: ", this._kategoria);
    
    this.argazkiaJaso();
  }

  update(e: FileList) {
    this.img = e.item(0);
  }

  argazkiaJaso() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: 0, //Set the source of the picture. Defined in Camera.PictureSourceType. Default is CAMERA. PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 200,
      targetWidth: 200,
      allowEdit: true,
      //popoverOptions// para ios igual hace falta...comprobar
      saveToPhotoAlbum: false,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.argazkia = base64Image;
        this.formSubmit();
      },
      (err) => {
        // Handle error
        this.toastSortu("Error en la recogida de la foto");
        console.error("Recogida de foto desde la galeria: ", err); //printeara el error en la consola
      }
    );
  }

  formSubmit() {
    this.firebaseConnect
      .createIkono(this.argazkia)
      .then(async (res) => {
        //asinc funtzioa hemen deklaratu dugu
        console.log(res);
        this.toastSortu("Imagen cargada");
        this.argazkia = null;
      })
      .catch((error) =>
        console.log("Error irudiak gordetzean Realtime Databasean->", error)
      ); // except ba daude hemen sartuko da.
  }

  async toastSortu(mns) {
    const toast = await this.toastController.create({
      color: "dark",
      duration: 2000,
      message: mns,
    });
    toast.present();
  }

  async salir(){
    await this.auth.logout();
    this.router.navigate(['login']);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CrudPiktogramakPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  
}
