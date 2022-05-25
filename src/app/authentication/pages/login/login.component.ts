import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/core/models/loginRequest.model';
import { AuthService } from 'src/app/core/services/auth.service';

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

  constructor(
    private authService: AuthService,
    private router: Router) { }

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
      const request: LoginRequest = {
        email: email,
        password: password
      }
      this.authService.login(request).subscribe(response => {
        console.log(response);
        this.router.navigate(['/household/selection']);
      },
      error => {
        console.log(error);
      });
    }
  }

}
