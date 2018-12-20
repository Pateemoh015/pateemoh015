import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  constactArray = [
    {name: 'Nena', telephone: '0862998832', imageUrl: 'assets/imgs/1.jpg'}
    ,{name: 'Neno', telephone: '0862998832', imageUrl: 'assets/imgs/2.jpg'}
    ,{name: 'Nona', telephone: '0862998832', imageUrl: 'assets/imgs/3.jpg'}
    ,{name: 'Ninaa', telephone: '0862998832', imageUrl: 'assets/imgs/4.jpg'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//end class
