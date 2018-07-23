import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
 

/**
 * Generated class for the FounditemformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-founditemform',
  templateUrl: 'founditemform.html',
})
export class FounditemformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FounditemformPage');
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Post this Item?',
      message: 'Do you agree to share all these information about this item you have just found?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  postItem(){
    this.navCtrl.push('FounditempagePage');
  }

}
