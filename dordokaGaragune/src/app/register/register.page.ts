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
    this.authSvc.logout();
    this.ionicForm = this.formBuilder.group({
      nick: ['', [Validators.required, Validators.pattern('')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // 8 letras, una minuscula, una mayuscula, un numero y un caracter especial
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
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
