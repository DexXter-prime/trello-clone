import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IControls } from 'src/app/interfaces';


// 1 pop up messages about WRONG EMAIL
// 2 message about WRONG PASSWORD


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public imgPath = '../../../assets/images/smallest.svg';
  public googleImg = '../../../assets/images/google-small.svg';

  logInForm!: UntypedFormGroup;
  submittedForm = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = new UntypedFormGroup({
      'email': new UntypedFormControl(null, [Validators.required, Validators.email]),
      'password': new UntypedFormControl(null, Validators.required)
    })

  }


  checkTheFields(controls: IControls): boolean { //put innto service

    for (const key in controls) {
      if(controls[`${key}`].errors) {
        return false
      }
    }

    return true;
  }

  onSubmit(): void {
    this.submittedForm = true;

    let isValid = this.checkTheFields(this.logInForm.controls);
    if(isValid) {
      this.auth.state = true;
      this.router.navigate(['boards'])
    }
  }

}
