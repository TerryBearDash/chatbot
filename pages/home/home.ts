import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTransportService } from '../../services/data-transport.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    'p strong { color: #fff; }',
    'h1 strong { color: #999; font-weight: 900; }',
    'p { color: #2B457E; font-weight: 300; font-size: 16px; text-align: center; max-width: 70%; margin: 40px auto 20px; display: block; }',
    'h1 { font-weight: 900 !important; font-size: 22px; color: #2B457E); text-align: center; max-width: 80%; width: 100%; margin: 0 auto 20px; !important; display: block; }',
    '.chatbot-search { border: 0; border-bottom: 1px solid #2B457E; background-color: transparent !important; margin-top: 0px; margin-top: 80px;}',
    '.options-grid { margin-top: 0px; }',
    '.btn-container ion-icon { font-size: 3em; color: #2B457E; }',
    '.toolbar-background { background-color: transparent !important; border: 0; }',
    '.toolbar-title { color: #2B457E }',
    '.btn-container p { color: #fff; text-transform: capitalize; font-weight: 400; font-size: 10px; letter-spacing: 0px; margin-bottom: 10px; margin-top: 10px; display: none; }',
    '.btn-container { background-color: #fff; width: 80px; height: 80px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 45px; margin: 0 auto; }',
    '.options-grid .col { text-align: center; padding: 0px 0; margin-top: 20px; }'
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
