import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

enum PageType {
  Security = 'security',
  Personal = 'personal',
  Confirmation = 'confirmation'
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  readonly pageType = PageType;
  type: PageType;
  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeSub= this.activatedRoute.params
      .subscribe(params => {
        this.type = params['step'];
      })
  }

}
