import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public contactsService: ContactsProvider) {

    }

    ionViewDidLoad() {
      this.contactsService.loadcontacts();
    }

    
}
