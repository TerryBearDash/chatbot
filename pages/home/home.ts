import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTransportService } from '../../services/data-transport.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    'p strong { color: #fff; }',
    'h1 strong { color: #999; font-weight: 900; }',
    'p { color: #2B457E; font-weight: 300; font-size: 16px; text-align: center; max-width: 50%; margin: 20px auto 20px; display: block; }',
    'h1 { font-weight: 900 !important; font-size: 22px; color: #2B457E); text-align: center; max-width: 80%; width: 100%; margin: 0 auto 20px; !important; display: block; }',
    '.chatbot-search { border: 0; border-bottom: 1px solid #efefef; background-color: #f4f4f4; margin-top: 0px;}',
    'input.searchbar-input { font-size: 28px !important; font-weight: 300 !important; background-color: transparent !important; }',
    '.searchbar-search-icon { left: 0 !important; top: 3px !important; width: 24px !important; height: 24px !important; background-size: 23px !important; }',
    '.options-grid { margin-top: 0px; }',
    '.options-grid .col { text-align: center; padding: 0px 0;}',
    '.options-grid .col ion-icon { font-size: 4em; color: #2B457E; }',
    '.options-grid .col p { text-transform: uppercase; font-size: 12px; letter-spacing: 3px; margin-bottom: 10px; margin-top: 30px;}'
  ]
})
export class HomePage {

  homeSearch: any = null;
  globalSearch: any = null;

  constructor(
    public navCtrl: NavController,
    private DTS: DataTransportService
  ) {
    this.DTS.search.subscribe( async (d: any) => this.globalSearch = d);
  }

}
