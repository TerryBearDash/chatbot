import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/auth/login/login';
import { HomePage } from '../pages/home/home';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  styles: [
    'h1 { font-weight: 900 !important; font-size: 22px; color: #2B457E; text-align: left; display: block; }',
    '.list-ios .item-block .item-inner { border: 0 !important; }',
    'ion-item.item.item-block.item-ios { border: 0 !important; }',
    'ion-list io-item .item-inner { border-bottom: 0 solid #c8c7cc !important; }'
  ]
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    private navCtrl: NavController
  ) {
    platform.ready().then((cordova) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log(platform);
    });
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
