import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../signup/item';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public newForm;
  constructor(public itemService: ItemService) {


  }
  ngOnInit() {
    this.newForm = new FormGroup({
      itemName: new FormControl("", Validators.required),
      numberNeeded: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    const itemName = this.newForm.get("itemName").value;
    const numberNeeded = this.newForm.get("numberNeeded").value;
    this.itemService.newItem(itemName, numberNeeded);
  }

}