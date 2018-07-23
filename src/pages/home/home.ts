import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { usercreds } from '../../models/interfaces/usercreds';
 
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  credentials = {} as usercreds;

  constructor(public navCtrl: NavController) {

  }

}
