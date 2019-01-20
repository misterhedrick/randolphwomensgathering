import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-who-attended',
  templateUrl: './who-attended.component.html',
  styleUrls: ['./who-attended.component.scss']
})
export class WhoAttendedComponent implements OnInit {

  constructor(public registerService: RegisterService) { }

  ngOnInit() {
  }

}
