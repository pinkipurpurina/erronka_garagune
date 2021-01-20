import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private authSvc: AuthService, private router: Router, public toastController: ToastController) { }

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
        if (user) {
          this.authSvc.getUsers().once("value", (snap) => {
            snap.forEach((element) => {
              var uid = element.key;
              if (user.uid == uid) {
                this.router.navigate(['admin-user-view']);
              }
              this.authSvc.getMonitorUsers(uid).once("value", (snap) => {
                snap.forEach((element2) => {
                  var monitorUid = element2.key;
                  if (user.uid == monitorUid) {
                    this.router.navigate(['user-kategoria']);
                  }
                });
              });
            });
          });
        } else {
          const toast = await this.toastController.create({
            message: 'Email o contraseña incorrecta.',
            duration: 2000
          });
          toast.present();
        }
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.router.navigate(['admin-user-view']);
      } else {
        const toast = await this.toastController.create({
          message: 'Email o contraseña incorrecta.',
          duration: 2000
        });
        toast.present();
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  // private redirectUser(isVerified: boolean): void {
  //   if (isVerified) {
  //     this.router.navigate(['admin']);//Redirigir a admin
  //   } else {
  //     this.router.navigate(['verify-email']);//Redirigir a verification page
  //   }
  // }
}