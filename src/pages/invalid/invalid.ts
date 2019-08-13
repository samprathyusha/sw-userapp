import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the InvalidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invalid',
  templateUrl: 'invalid.html',
})
export class InvalidPage {
  tamper:boolean;
  blockchain:boolean;
  details:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
 var result=this.navParams.get('details');
  if(result=="valid and unsecured"){
  this.tamper=true;
  this.blockchain=true;  
}
else if(result="DataDoNotExist"){
  this.tamper=false;
  this.blockchain=false;
}


  
  
}

  checkNext(){
    this.navCtrl.setRoot(HomePage);
  }

}
