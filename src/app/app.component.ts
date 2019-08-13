import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AlertController} from 'ionic-angular';
import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Network } from '@ionic-native/network';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any='';
  // rootPage=TransferPage;
  username:string;
  phonenumber:string;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public alertctrl:AlertController, public statusBar: StatusBar,private network:Network,
    public splashScreen: SplashScreen) {
     if(this.network.type=='none'){
       let alert=this.alertctrl.create({
         title:' ERROR',
         message:'Please check your Internet Connection and try again.',
         buttons:[{text:"ok",handler:()=>{
           platform.exitApp();
         }}]
       })
       alert.present();
     }
     this.network.onDisconnect().subscribe(()=>{
       let alert=this.alertctrl.create({
         title:' ERROR',
         message:'Please check your Internet Connection and try again.',
         buttons:[{text:"ok",handler:()=>{
           platform.exitApp();
         }}]
       })
       alert.present();
         })
   this.initializeApp();
    // checking local storage  
    if(window.localStorage.getItem("phonenumber")==null&& window.localStorage.getItem("password")==null){
     this.rootPage=LoginPage;
           }
           else if(window.localStorage.getItem("phonenumber")!=null&& window.localStorage.getItem("password")!=null){
     this.rootPage=HomePage;
           }

   // used for an example of ngFor and navigation
   this.pages = [
     { title: 'HOME', component: HomePage },
     
     {title:'LOGOUT', component:LoginPage}

   ];

   this.username=window.localStorage.getItem("username")
   this.phonenumber=window.localStorage.getItem("phonenumber");

 }

 initializeApp() {
   this.platform.ready().then(() => {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     this.statusBar.styleDefault();
     this.splashScreen.hide();
   });
 }

 openPage(page) {
   // Reset the content nav to have just this page
   // we wouldn't want the back button to show in this scenario
   this.nav.setRoot(page.component);
 }
}

