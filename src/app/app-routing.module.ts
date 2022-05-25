import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//This is my case
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then((m) => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module')
      .then((m) => m.AuthenticationModule)
  },
  {
    path: 'household',
    loadChildren: () => import('./household//household.module')
      .then((m) => m.HouseholdModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
