import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Person } from '../models/person';
@Injectable()
export class RegisterService {
  registeredList: Person[] = [];
  totalNumber = 0;
  constructor(private afStore: AngularFirestore) {
    this.getWhoAttended();
  }
  register(name, email, church) {
    this.afStore.collection("whoattended").add({
      name: name,
      email: email,
      church: church,
    });
  }

  getWhoAttended() {
    this.afStore.collection<Person>('whoattended')
      .snapshotChanges().subscribe(results => {
        this.registeredList = [];
        for (const item of results) {
          const personObject = new Person();
          personObject.name = item.payload.doc.data().name;
          personObject.email = item.payload.doc.data().email;
          personObject.church = item.payload.doc.data().church;
          this.registeredList.push(personObject);
          this.totalNumber++;
        }
      });
  }

}