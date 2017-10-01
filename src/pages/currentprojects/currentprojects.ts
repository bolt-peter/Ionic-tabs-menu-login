import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VotingPage } from '../voting/voting';

@IonicPage()
@Component({
  selector: 'page-currentprojects',
  templateUrl: 'currentprojects.html',
})
export class CurrentprojectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentprojectsPage');
  }

  onClickProject(){
    //we will fetch project data here, including images' links, voting options 
    this.navCtrl.push(VotingPage, {projectdata: ''});
  }
}
