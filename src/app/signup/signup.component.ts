import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from './item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(public itemService: ItemService) {
    this.itemService.getItems();
  }
  signupForm = new FormGroup({
    itemName: new FormControl(),
    numberNeeded: new FormControl(),
    volunteerName: new FormControl(),
    email: new FormControl(),
    numberBringing: new FormControl()
  });

}
