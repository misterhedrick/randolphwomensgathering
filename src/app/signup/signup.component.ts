import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from './item';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm;
  constructor(public itemService: ItemService, private router: Router) {


  }
  ngOnInit() {
    this.signupForm = new FormGroup({
      itemName: new FormControl(this.itemService.currentItem.itemName, Validators.required),
      numberNeeded: new FormControl(this.itemService.currentItem.numberNeeded, Validators.required),
      volunteerName: new FormControl(this.itemService.currentItem.volunteerName, Validators.required),
      email: new FormControl(this.itemService.currentItem.email, Validators.required),
      numberBringing: new FormControl(this.itemService.currentItem.numberBringing, Validators.required)
    });
  }

  onSubmit() {
    const itemName = this.signupForm.get("itemName").value;
    const numberNeeded = this.signupForm.get("numberNeeded").value;
    const volunteerName = this.signupForm.get("volunteerName").value;
    const email = this.signupForm.get("email").value;
    const numberBringing = this.signupForm.get("numberBringing").value;
    this.itemService.currentItem.numberBringing = numberBringing;
    this.itemService.currentItem.volunteerName = volunteerName;
    this.itemService.currentItem.email = email;
    this.itemService.updateItem(this.itemService.currentItem);
    this.itemService.addWhoSignedUp();
    this.router.navigate(["home"]);
  }

}
