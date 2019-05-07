import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../../home/home';
import { UserRegister } from '../../../class/user-register';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public User = new UserRegister();

  constructor(
    public navCtrl: NavController
  ) {

  }

  onRegister() {
    console.log('Login Function');
    console.log(this.User);
    this.navCtrl.setRoot(HomePage);
  }
  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
