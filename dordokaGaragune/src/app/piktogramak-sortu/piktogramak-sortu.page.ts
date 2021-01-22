import { Component, OnInit } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { MyData } from "../interfaces/usersInterface";
import firebase from "firebase/app";
import { UsuariosFirebaseService } from "./../services/usuarios-firebase.service";
import { ModalController } from "@ionic/angular";
import {
  ImageResizer,
  ImageResizerOptions,
} from "@ionic-native/image-resizer/ngx"; //desinstalar
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-piktogramak-sortu",
  templateUrl: "./piktogramak-sortu.page.html",
  styleUrls: ["./piktogramak-sortu.page.scss"],
})
export class PiktogramakSortuPage {
  picNombre: string;
  izena: string;
  img: any;
  argazkia: string;

  // Upload Task
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details
  fileName: string;
  fileSize: number;

  //Status check
  isUploading: boolean;
  isUploaded: boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(
    private modalCtrl: ModalController,
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    private FirebaseService: UsuariosFirebaseService,
    private camera: Camera,
    
  ) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>("imagenesDordoka");
    this.images = this.imageCollection.valueChanges();
  }

  update(e: FileList) {
    this.img = e.item(0);
  }

  formSubmit() {
    this.FirebaseService.createPiktograma(this.argazkia, this.picNombre)
      .then(async (res) => {
        //asinc funtzioa hemen declaratu dugu
        console.log(res);

        await this.modalCtrl.dismiss(); //await-ek itxaron egiten du bukatu arte eta horria ixten du
        this.argazkia = null;
      })
      .catch((error) =>
        console.log("Error irudiak gordetzean Realtime Databasean->", error)
      ); // exceptionic ba daude hemen sartuko da.
  }

  argazkiaJaso() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: 0, //Set the source of the picture. Defined in Camera.PictureSourceType. Default is CAMERA. PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 100,
      targetWidth: 100,
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
      },
      (err) => {
        // Handle error
        console.error("recogida de foto desde la galeria: ", err); //printeara el error en la consola
      }
    );
  }
}
