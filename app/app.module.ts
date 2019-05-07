import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/auth/login/login';
import { RegisterPage } from '../pages/auth/register/register';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataTransportService } from '../services/data-transport.service';
import { ApiService } from '../services/api.service';
import { ImportantPage } from '../pages/important-numbers/important';
import { LibraryPage } from '../pages/library/library';
import { NotificationsPage } from '../pages/notifications/notifications';
import { PortfolioPage } from '../pages/portfolio/portfolio';

import { NavController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ImportantPage,
    LibraryPage,
    NotificationsPage,
    PortfolioPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      tabsPlacement: 'bottom',
      iconMode: 'ios',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ImportantPage,
    LibraryPage,
    NotificationsPage,
    PortfolioPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataTransportService,
    ApiService,
  ]
})
export class AppModule {}
