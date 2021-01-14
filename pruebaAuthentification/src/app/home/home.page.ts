import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private authSvc: AuthService, private router: Router) {}

  userUid = "";
  
  ngOnInit() {
    var user = this.authSvc.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in',res.uid); 
        this.userUid = res.uid;
      } else {
        console.log('user not logged in');
        this.userUid = null;
      }
    });
  }

  async onSignOut() {
    try {
      const user = await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
