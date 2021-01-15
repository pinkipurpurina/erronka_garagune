import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nick: ['', [Validators.required, Validators.pattern('')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async onRegister(email, password, nick) {
    try {
      this.isSubmitted = true;
      if (!this.ionicForm.valid) {
        return false;
      } else {
        const user = await this.authSvc.register(email.value, password.value, nick.value);
        if (user) {
          this.router.navigate(['/login']);
        }
      }
    } catch (error){
      console.log('Error->', error);
    }
  }
}
