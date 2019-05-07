import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PortfolioPage } from '../portfolio/portfolio';
import { LibraryPage } from '../library/library';
import { ImportantPage } from '../important-numbers/important';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PortfolioPage;
  tab3Root = LibraryPage;
  tab4Root = ImportantPage;
  tab5Root = NotificationsPage;

  constructor(
    public menuCtrl: MenuController
  ) {}

  toggleMenu(e) {
    console.log(e);
    this.menuCtrl.toggle('right');
  }
}
