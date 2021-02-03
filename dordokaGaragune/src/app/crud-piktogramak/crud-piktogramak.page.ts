import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-crud-piktogramak',
  templateUrl: './crud-piktogramak.page.html',
  styleUrls: ['./crud-piktogramak.page.scss'],
})
export class CrudPiktogramakPage implements OnInit {
  promiseDeFile: any;
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
    console.log("abierto popover");
    
  }
  async close() {
    await this.popoverController.dismiss();
  }
}
