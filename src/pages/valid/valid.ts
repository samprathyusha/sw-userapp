import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ValidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-valid',
  templateUrl: 'valid.html',
})
export class ValidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidPage');
  }

  checkNext(){
    this.navCtrl.setRoot(HomePage);
  }

  redirect(){
    this.navCtrl.setRoot(HomePage);
  }
}
