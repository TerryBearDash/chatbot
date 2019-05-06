import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    'p strong { color: #fff; }',
    'h1 strong { color: #999; font-weight: 900; }',
    'p { color: #999; font-weight: 300; font-size: 26px;',
    'h1 { font-weight: 300 !important; font-size: 32px; color: #999; text-align: center; margin: 50px 0 50px !important; }',
    '.chatbot-search { border: 0; border-bottom: 1px solid #ccc; background-color: transparent; }',
    '.chatbot-search input.searchbar-input { font-size: 28px !important; font-weight: 300 !important; }',
    '.chatbot-search .searchbar-search-icon { left: 0 !important; top: 3px !important; width: 24px !important; height: 24px !important; background-size: 23px !important; }'
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
