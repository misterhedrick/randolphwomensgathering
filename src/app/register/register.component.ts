import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm;
  constructor(public registerService: RegisterService) {


  }
  ngOnInit() {
    this.newForm();
  }
  newForm() {
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      church: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    this.registerService.register(this.registerForm.get("name").value, this.registerForm.get("email").value, this.registerForm.get("church").value);
    this.newForm();
  }

}

