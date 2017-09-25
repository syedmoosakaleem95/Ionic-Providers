import { Injectable } from '@angular/core';

@Injectable()
export class ContactsProvider {

  contacts:any [];
  
  constructor() {
    console.log('Hello ContactsProvider Provider');
  }

  loadcontacts() {
    this.contacts = [
      {title:'YBM',contact:'786'},
      {title:'Noor',contact:'1234'},
      {title:'Naimath',contact:'5678'},
      {title:'Danish',contact:'9102'}
    ]
  }
}
