import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseSelectPageComponent } from './house-select-page.component';

describe('HouseSelectPageComponent', () => {
  let component: HouseSelectPageComponent;
  let fixture: ComponentFixture<HouseSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseSelectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
