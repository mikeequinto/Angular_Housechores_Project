import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { EmailConfirmedComponent } from './pages/email-confirmed/email-confirmed.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'emailConfirmation',
    component: EmailConfirmationComponent
  },
  {
    path: 'emailConfirmed',
    component: EmailConfirmedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
