import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  tabsPage = TabsPage;
  signupPage = SignupPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtril: AlertController) {
  }
  onSignin(form:NgForm){
    const loading = this.loadingCtrl.create({
      content: "Signing in"
    });
    const alert = this.alertCtril.create();
    loading.present();
    //promise chain. 
    if(form.value){
      loading.dismiss();
      this.navCtrl.setRoot(TabsPage, {content: 'wow'});
    }
  }
}
