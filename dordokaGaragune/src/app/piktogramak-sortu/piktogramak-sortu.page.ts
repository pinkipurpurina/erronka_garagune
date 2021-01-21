import { Component, OnInit } from '@angular/core';
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
import firebase from 'firebase/app';
import { UsuariosFirebaseService } from "./../services/usuarios-firebase.service";
import { ModalController } from '@ionic/angular';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer/ngx';//desistalar
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-piktogramak-sortu',
  templateUrl: './piktogramak-sortu.page.html',
  styleUrls: ['./piktogramak-sortu.page.scss'],
})
export class PiktogramakSortuPage  {
 
  picNombre:string;
  izena:string;
  img:any;
  argazkia:string;
  
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
      private camera:Camera,
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
      
      let options = {
        uri: "file//storage/",
        folderName: 'Protonet',
        quality: 90,
        width: 1280,
        height: 1280
       } as ImageResizerOptions;

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
             // this.formSubmit(resp,this.picNombre); 
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
  
      formSubmit() {
      this.FirebaseService
        .createPiktograma(this.argazkia, this.picNombre)
        .then(async (res) => {//asinc funtzioa hemen declaratu dugu
          console.log(res);
          await this.modalCtrl.dismiss();//await-ek itxaron egiten du bukatu arte eta horria ixten du
          this.argazkia=null;
        })
        .catch((error) => console.log('Error irudiak gordetzean Realtime Databasean->', error));// exceptionic ba daude hemen sartuko da.
    }


    argazkiaJaso(){

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
    
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.argazkia=base64Image;
      

      }, (err) => {
       // Handle error
       console.error("recogida de foto desde la galeria: ",err);//printeara el error en la consola
       
      });
      
      
  
    }


  }
  