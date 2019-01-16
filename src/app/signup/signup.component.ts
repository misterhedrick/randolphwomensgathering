import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { FormBuilder } from '@angular/forms';
import { ItemService } from './item.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private fb: FormBuilder, public itemService: ItemService) {
    this.itemService.getItems();
  }

  // editField: string;
  // itemList: Array<any> = [
  //   { id: 1, itemName: 'Aurelia Vega', numberNeeded: 30, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 2, itemName: 'Guerra Cortez', numberNeeded: 45, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 3, itemName: 'Guadalupe House', numberNeeded: 26, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 4, itemName: 'Aurelia Vega', numberNeeded: 30, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 5, itemName: 'Elisa Gallagher', numberNeeded: 31, volunteerName: '', email: '', numberBringing: 0 },
  // ];

  // awaitingPersonList: Array<any> = [
  //   { id: 6, itemName: 'George Vega', numberNeeded: 28, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 7, itemName: 'Mike Low', numberNeeded: 22, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 8, itemName: 'John Derp', numberNeeded: 36, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 9, itemName: 'Anastasia John', numberNeeded: 21, volunteerName: '', email: '', numberBringing: 0 },
  //   { id: 10, itemName: 'John Maklowicz', numberNeeded: 36, volunteerName: '', email: '', numberBringing: 0 },
  // ];

  // updateList(id: number, property: string, event: any) {
  //   const editField = event.target.textContent;
  //   this.itemList[id][property] = editField;
  // }

  // remove(id: any) {
  //   this.awaitingPersonList.push(this.itemList[id]);
  //   this.itemList.splice(id, 1);
  // }

  add() {
    this.itemService.addItem();
  }

  // changeValue(id: number, property: string, event: any) {
  //   this.editField = event.target.textContent;
  // }
}
