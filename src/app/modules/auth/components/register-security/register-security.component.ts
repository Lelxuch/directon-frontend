import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-security',
  templateUrl: './register-security.component.html',
  styleUrls: ['./register-security.component.scss']
})
export class RegisterSecurityComponent implements OnInit {

  form: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      repPassword: [null, [Validators.required]]
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.getRawValue());
    this.router.navigateByUrl('/register/personal')
  }

}
