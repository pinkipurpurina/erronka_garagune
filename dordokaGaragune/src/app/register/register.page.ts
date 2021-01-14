import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(email, password,nick) {
    try {
      const user = await this.authSvc.register(email.value, password.value,nick.value);
      if (user) {
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }
}
