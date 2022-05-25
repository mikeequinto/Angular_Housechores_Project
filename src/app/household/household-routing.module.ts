import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseSelectPageComponent } from './pages/house-select-page/house-select-page.component';

const routes: Routes = [
  {
    path: 'selection',
    component: HouseSelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseholdRoutingModule { }
