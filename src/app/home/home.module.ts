import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
