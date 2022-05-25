import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseSelectPageComponent } from './pages/house-select-page/house-select-page.component';
import { HouseholdRoutingModule } from './household-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HouseSelectPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HouseholdRoutingModule
  ]
})
export class HouseholdModule { }
