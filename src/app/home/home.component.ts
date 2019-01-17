import { Component } from '@angular/core';
import { Item } from '../signup/item';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public itemService: ItemService) {
  }
}
