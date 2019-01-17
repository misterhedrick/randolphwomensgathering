import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../signup/item';
@Injectable()
export class ItemService {
  itemList: Item[] = [];
  currentItem: Item;
  constructor(private afStore: AngularFirestore) {
    this.getItems();
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
  updateItem(item: Item) {
    console.log("number bringing", item.numberBringing);
    // var updateItem = this.afStore.collection('items').doc('napkins');
    // var updateSingle = updateItem.update({ numberNeeded: 10 });
    // return Promise.all([updateSingle]).then(res => {
    //   console.log('Update: ', res);
    // });
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
  signup(item: Item) {
    console.log(item.itemName);
  }
  setCurrentItem(item: Item) {
    this.currentItem = item;
  }
}