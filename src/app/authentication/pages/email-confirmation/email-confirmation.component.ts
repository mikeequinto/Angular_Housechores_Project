import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {

  email: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let email = this.route.snapshot.queryParamMap.get('email');
    if (email) {
      this.email = email;
    }
  }

}
