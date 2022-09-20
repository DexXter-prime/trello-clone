import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/confirmPassword.validator';
import { IControls } from 'src/app/interfaces';

// 1 message about SUCH EMAIL ALREADY REGISTERED (async Validator)


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public imgPath = '../../../assets/images/smallest.svg';
  public googleImg = '../../../assets/images/google-small.svg';

  signUpForm!: UntypedFormGroup;
  submittedForm = false;



  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new UntypedFormGroup({
      'name': new UntypedFormControl(null, Validators.required),
      'email': new UntypedFormControl(null, [Validators.required, Validators.email]),
      'password': new UntypedFormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
      'confirm-password': new UntypedFormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
    },
      [CustomValidator.mustMatch('password', 'confirm-password')]
    );


  }


  checkTheFields(controls: IControls): boolean { // put into service

    for (const key in controls) {
      if (controls[`${key}`].errors || this.signUpForm.errors) {
        return false;
      }
    }
    return true;

  }

  get resultOfConfirmation(): boolean {
    return (this.signUpForm.getError('notMatching') && !this.signUpForm.get('confirm-password')?.errors)
  }


  onSubmit(): void {
    this.submittedForm = true;
    let isValid = this.checkTheFields(this.signUpForm.controls);
    if (isValid) {
      console.log('works!');
    }
  }

}
