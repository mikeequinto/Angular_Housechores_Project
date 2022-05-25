import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/core/models/registrationRequest.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // Form input fields
  signupForm = new FormGroup({
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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    this.isLoading = true;

    // Form controls
    let name = this.signupForm.controls['name'].value;
    let email = this.signupForm.controls['email'].value;
    let password = this.signupForm.controls['password'].value;
    let passwordConfirm = this.signupForm.controls['passwordConfirm'].value;

    // Verify form validity
    if (name === '' || email === '' || password === '' || passwordConfirm === '') {
      this.invalidForm = true;
      this.errorMessage = "Please fill all fields";
      this.isLoading = false;
    }
    else if (this.signupForm.get('email')?.errors) {
      this.invalidForm = true;
      this.errorMessage = "Please input a valid email";
      this.isLoading = false;
    }
    else if (password !== passwordConfirm) {
      this.invalidForm = true;
      this.errorMessage = "The passwords do not match";
      this.isLoading = false;
    }
    else {

      // Form is valid
      this.invalidForm = false;
      this.isLoading = true;

      // Register user
      const registrationRequest: RegistrationRequest = {
        name: name,
        username: email,
        email: email,
        password: password
      }
      this.register(registrationRequest);
    }
  }

  register(registrationRequest: RegistrationRequest) {
    this.authService.register(registrationRequest).subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(
          ['/auth/emailConfirmation'],
          { queryParams: {
              email: registrationRequest.email
          }});
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }
}
