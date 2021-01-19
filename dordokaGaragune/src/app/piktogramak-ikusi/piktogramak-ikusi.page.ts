import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
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
import { UsuariosFirebaseService } from "../services/usuarios-firebase.service";

@Component({
  selector: "app-piktogramak-ikusi",
  templateUrl: "./piktogramak-ikusi.page.html",
  styleUrls: ["./piktogramak-ikusi.page.scss"],
})
export class PiktogramakIkusiPage implements OnInit {
  piktogramak: any[] = [];
  picNombre: string;
  izena: string;
  img: File;
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
    public modalController: ModalController,
    private firebaseConnect: UsuariosFirebaseService,//igual public?
    private storage: AngularFireStorage,
    private database: AngularFirestore,
  ) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>("imagenesDordoka");
    this.images = this.imageCollection.valueChanges();



  }

  ngOnInit() {
    this.irakurriPiktogramak();
    this.ikustekoProbak();
  }

  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: AdminCrearUsuarioPage,
  //     cssClass: "my-custom-class",
  //   });
  //   return await modal.present();
  // }
  ikustekoProbak() {
    this.images.subscribe(data => {
      data.forEach(element => {
        console.log(element.filepath);
      });
    });
  }


  irakurriPiktogramak() {
    console.log("sartu");
    this.firebaseConnect.getPiktogramaList().once("value", (snap) => {
      snap.forEach((element) => {
        console.log("bakoitza---", element.val());

        var uid = element.key;
        var data = element.val();
        console.log("UID--", uid);
        console.log("IZENA--", data.piktogramaIzena);
        console.log("HELBIDEA--", data.piktogramaHelbidea);
        // console.log(this.database.collection<MyData>("imagenesDordoka/"+"1610535945436_PAN.PNG"));

        this.piktogramak.push({
          uid: uid,
          data: data,
          //irudia:""//kargatu datu basetik irudia
        });
      });
    });
  }
  update(e: FileList) {
    this.img = e.item(0);

  }

  uploadFile() {//try catch
    // The File object
    // this.img = e.item(0);
    const file = this.img
    console.log(this.img.name);


    // Validation for Images Only
    if (file.type.split("/")[0] !== "image") {
      console.error("unsupported file type :( ");
      return;
    }

    this.isUploading = true;
    this.isUploaded = false;

    this.fileName = file.name;

    // The storage path
    const path = `imagenesDordoka/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: "Dordoka Image Upload Demo" };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(
          (resp) => {
            this.addImagetoDB({
              name: file.name,
              filepath: resp,
              size: this.fileSize,
              //piktogramaIzena:this.picNombre,
            });
            this.isUploading = false;
            this.isUploaded = true;
            //Guardar en realtime database la url del archivo para su carga
            this.formSubmit(resp, this.picNombre);
            console.log(resp);

          },
          (error) => {
            console.error(error);
          }
        );
      }),
      tap((snap) => {
        this.fileSize = snap.totalBytes;
      })
    );
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection
      .doc(id)
      .set(image)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }

  formSubmit(path: any, name: string) {
    this.firebaseConnect
      .createPiktograma(path, name)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }
}



