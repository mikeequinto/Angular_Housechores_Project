import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form input fields
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.email, Validators.required
    ])),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required)
  });

  // Form validity
  invalidForm: boolean = false;
  errorMessage: string = '';

  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    this.isLoading = true;

    // Form controls
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    // Verify form validity
    if (email === '' || password === '') {
      this.invalidForm = true;
      this.errorMessage = "Please fill all fields";
      this.isLoading = false;
    }
    else if (this.loginForm.get('email')?.errors) {
      this.invalidForm = true;
      this.errorMessage = "Please input a valid email";
      this.isLoading = false;
    }
    else {

      // Form is valid
      this.invalidForm = false;
    }
  }

}
