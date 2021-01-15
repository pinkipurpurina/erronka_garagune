import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
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
          // const isVerified = this.authSvc.isEmailVerified(user);
          this.router.navigate(['admin-user-view']);
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
        // const isVerified = this.authSvc.isEmailVerified(user);

        this.router.navigate(['admin-user-view']);
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