import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-whosignedup',
  templateUrl: './whosignedup.component.html',
  styleUrls: ['./whosignedup.component.scss']
})
export class WhosignedupComponent {

  constructor(public itemService: ItemService) { }

}
