import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { FileManagementService } from '../services/file-management.service';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.page.html',
  styleUrls: ['./menu-modal.page.scss'],
})
export class MenuModalPage implements OnInit {
  promiseDeFile: any;
  constructor(public auth: AuthService, public popoverController: PopoverController, public router: Router, public filer: FileManagementService) { }

  ngOnInit() {

  }
  async close() {
    await this.popoverController.dismiss();
  }

  async salir() {
    this.filer.eliminar();
    await this.auth.logout();
    this.router.navigate(['login']);
    this.close()
  }
}
