import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage }from '../pages/signin/signin';
import { TabsPage } from '../pages/tabs/tabs';
import { CurrentprojectsPage } from '../pages/currentprojects/currentprojects';
import { PastprojectsPage } from '../pages/pastprojects/pastprojects';
import { DocumentsPage } from '../pages/documents/documents'; 
import { DocumentPage } from '../pages/document/document'; 
import { VotingPage } from '../pages/voting/voting';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    TabsPage,
    CurrentprojectsPage,
    PastprojectsPage,
    DocumentsPage,
    DocumentPage,
    VotingPage,
    ProfilePage,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    TabsPage,
    CurrentprojectsPage,
    PastprojectsPage,
    DocumentsPage,
    DocumentPage,
    VotingPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
