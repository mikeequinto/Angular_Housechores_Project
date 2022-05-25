import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { HouseholdService } from 'src/app/core/services/household.service';

@Component({
  selector: 'app-house-select-page',
  templateUrl: './house-select-page.component.html',
  styleUrls: ['./house-select-page.component.scss']
})
export class HouseSelectPageComponent implements OnInit {

  // New household Form
  newForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  // New household Form
  existingForm = new FormGroup({
    id: new FormControl('', Validators.required),
  });

  constructor(private householdService: HouseholdService) { }

  ngOnInit(): void {
  }

  handleCreate(): void {
    console.log(this.newForm.controls['name'].value);
    console.log(this.newForm.valid);


    if (this.newForm.valid) {
      this.householdService.createHousehold(this.newForm.controls['name'].value).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
    }
  }
}
