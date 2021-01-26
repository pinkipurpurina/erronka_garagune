import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { FileManagementService } from '../services/file-management.service'
import { onErrorResumeNext } from 'rxjs';
import { HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private authSvc: AuthService, private router: Router, public toastController: ToastController, private fileManager: FileManagementService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // 8 letras, una minuscula, una mayuscula, un numero y un caracter especial
      // password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
      password: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async onLogin(email, password) {
    try {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
        const user = await this.authSvc.login(email.value, password.value);
        console.log();
        
        if (user) {
          this.authSvc.getUsers().once("value", (snap) => {
            snap.forEach((element) => {
              var monitorUid = element.key;
              if (user.user.uid == monitorUid) {
                this.router.navigate(['admin-user-view']);
              }
              this.authSvc.getMonitorUsers(monitorUid).once("value", (snap) => {
                snap.forEach((element2) => {
                  var usuarioUid = element2.key;
                  if (user.user.uid == usuarioUid) {
                    this.fileManager.userFileCreator(monitorUid, usuarioUid)
                    this.router.navigate(['user-kategoria']);
                  }
                });
              });
            });
          });
        } else {
          this.toastSortu("Email o contraseña incorrecta.*2");
        }
      }
    } catch (error) {
      console.log('Error->', error);
     
      this.toastSortu("Email o contraseña incorrecta.");
       
    }
  }
  async toastSortu(mns) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: mns
    });
    toast.present();
  }
}