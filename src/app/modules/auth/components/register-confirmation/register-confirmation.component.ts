import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-confirmation',
  templateUrl: './register-confirmation.component.html',
  styleUrls: ['./register-confirmation.component.scss']
})
export class RegisterConfirmationComponent implements OnInit {

  sendAgainAvailable: boolean = false;
  countdownTimer = 180;
  countdownMinutes = '';
  countdownSeconds = '';

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      code: [null, Validators.required]
    })
    this.convertSecondsToString();
    setInterval(() => {
      this.countdownTimer -= 1;
      this.convertSecondsToString();
      if (this.countdownTimer == 0) {
        this.sendAgainAvailable = true;
      }
    }, 1000)
  }

  convertSecondsToString() {
    let seconds = this.countdownTimer % 60;
    let minutes = Math.floor(this.countdownTimer / 60);
    this.countdownMinutes = '0' + minutes;
    if (seconds < 10) {
      this.countdownSeconds = '0' + seconds;
    } else {
      this.countdownSeconds = '' + seconds;
    }
  }

  sendAgain() {
    window.alert('Message sent again');
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.getRawValue());
  }

}
