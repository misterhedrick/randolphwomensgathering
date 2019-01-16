import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from './item';
@Injectable()
export class ItemService {
  itemList: Item[] = [];
  constructor(private afStore: AngularFirestore) {

  }
  getItems() {
    this.afStore.collection<Item>('items')
      .snapshotChanges().subscribe(results => {
        for (const item of results) {
          const itemObject = new Item();
          itemObject.itemName = item.payload.doc.data().itemName;
          itemObject.numberNeeded = item.payload.doc.data().numberNeeded;
          itemObject.volunteerName = item.payload.doc.data().volunteerName;
          itemObject.numberBringing = item.payload.doc.data().numberBringing;
          this.itemList.push(itemObject);
        }
      });
  }
  addItem() {
    var addDoc = this.afStore.collection('items').add({
      itemName: 'napkins',
      numberNeeded: 25,
      volunteerName: '',
      numberBringing: 0
    }).then(ref => {
      this.getItems();
      console.log('Added document with ID: ', ref.id);
    });
  }
}