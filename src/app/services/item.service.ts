import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Item } from '../signup/item';
@Injectable()
export class ItemService {
  itemList: Item[] = [];
  whoSignedUp: Item[] = [];
  currentItem: Item;
  constructor(private afStore: AngularFirestore) {
    this.getItems();
    this.getWhoSignedUp();
  }
  getItems() {
    this.afStore.collection<Item>('items')
      .snapshotChanges().subscribe(results => {
        this.itemList = [];
        for (const item of results) {
          const itemObject = new Item();
          itemObject.itemName = item.payload.doc.data().itemName;
          itemObject.numberNeeded = item.payload.doc.data().numberNeeded;
          itemObject.volunteerName = item.payload.doc.data().volunteerName;
          itemObject.numberBringing = item.payload.doc.data().numberBringing;
          itemObject.id = item.payload.doc.id;
          this.itemList.push(itemObject);
        }
      });
  }

  getWhoSignedUp() {
    this.afStore.collection<Item>('whoSignedUp')
      .snapshotChanges().subscribe(results => {
        this.whoSignedUp = [];
        for (const item of results) {
          const itemObject = new Item();
          itemObject.itemName = item.payload.doc.data().itemName;
          itemObject.email = item.payload.doc.data().email;
          itemObject.volunteerName = item.payload.doc.data().volunteerName;
          itemObject.numberBringing = item.payload.doc.data().numberBringing;
          itemObject.id = item.payload.doc.id;
          this.whoSignedUp.push(itemObject);
        }
      });
  }

  updateItem(item: Item) {
    this.afStore.collection("items").doc(item.id).update({
      "numberNeeded": item.numberNeeded - item.numberBringing
    });
  }
  newItem(itemName, numberNeeded) {
    this.afStore.collection("items").add({
      itemName: itemName,
      numberNeeded: numberNeeded,
      volunteerName: "",
      numberBringing: 0
    });
  }
  addWhoSignedUp() {
    this.afStore.collection("whoSignedUp").add({
      itemName: this.currentItem.itemName,
      numberBringing: this.currentItem.numberBringing,
      volunteerName: this.currentItem.volunteerName,
      email: this.currentItem.email
    });
  }
  signup(item: Item) {
    console.log(item.itemName);
  }
  setCurrentItem(item: Item) {
    this.currentItem = item;
  }
}