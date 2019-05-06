import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../pages/auth/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then((cordova) => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log(platform);
    });
  }
}
