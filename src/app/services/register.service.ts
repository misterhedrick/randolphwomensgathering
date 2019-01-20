import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../signup/item';
@Injectable()
export class ItemService {

  constructor(private afStore: AngularFirestore) {
  }
  register(name, email, church) {
    this.afStore.collection("whoattended").add({
      name: name,
      email: email,
      church: church,
    });
  }
}