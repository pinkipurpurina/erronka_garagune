import { Component } from "@angular/core";
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

import { UsuariosFirebaseService } from "./../services/usuarios-firebase.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {

  
picNombre:string;
izena:string;
img:File;

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
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    private aptService: UsuariosFirebaseService
  ) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>("imagenesDordoka");
    this.images = this.imageCollection.valueChanges();
  }

 update(e: FileList){
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
            this.formSubmit(resp,this.picNombre); 
            console.log(this.picNombre);
            
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

  formSubmit(path: any,name:string) {
    this.aptService
      .createPiktograma(path, name)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }
}
