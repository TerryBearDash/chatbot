import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../home/home';
import { RegisterPage } from '../register/register';
import { UserLogin } from '../../../class/user-login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public User = new UserLogin();

  constructor(public navCtrl: NavController) {

  }
  onLogin() {
    console.log('Login Function');
    console.log(this.User);
    this.navCtrl.setRoot(HomePage);
  }
  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
