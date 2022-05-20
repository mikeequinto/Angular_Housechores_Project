import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule } from '@angular/router';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { EmailConfirmationComponent } from './pages/emailConfirmation/email-confirmation/email-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    EmailConfirmationComponent
  ]
})
export class AuthenticationModule { }
