import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentPage } from '../document/document';

@IonicPage()
@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html',
})
export class DocumentsPage {
  pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad DocumentsPage');
  }
  onClickDocument(){
    this.navCtrl.push(DocumentPage, {link: this.pdfSrc});
  }
}
