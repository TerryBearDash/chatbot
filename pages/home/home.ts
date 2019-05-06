import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataTransportService } from '../../services/data-transport.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    'p strong { color: #fff; }',
    'h1 strong { color: #999; font-weight: 900; }',
    'p { color: #2B457E; font-weight: 300; font-size: 18px; text-align: center;',
    'h1 { font-weight: 300 !important; font-size: 32px; color: #2B457E; text-align: center; margin: 50px 0 0px !important; }',
    '.chatbot-search { border: 0; border-bottom: 1px solid #efefef; background-color: transparent; }',
    '.chatbot-search input.searchbar-input { font-size: 28px !important; font-weight: 300 !important; }',
    '.chatbot-search .searchbar-search-icon { left: 0 !important; top: 3px !important; width: 24px !important; height: 24px !important; background-size: 23px !important; }'
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
