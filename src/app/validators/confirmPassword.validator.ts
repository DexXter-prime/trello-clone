import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


export class CustomValidator {

  static mustMatch(controlName: string, matchControlName: string): ValidatorFn {
    return (control: AbstractControl ): ValidationErrors | null => {



      if ( control.get(controlName)?.value !== control.get(matchControlName)?.value) {

        return {notMatching: true}
      }

      return null;

    }
  }
}
