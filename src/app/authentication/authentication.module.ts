import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule } from '@angular/router';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { EmailConfirmedComponent } from './pages/email-confirmed/email-confirmed.component';

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
    EmailConfirmationComponent,
    EmailConfirmedComponent
  ]
})
export class AuthenticationModule { }
