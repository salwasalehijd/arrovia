import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],


})
export class SigninComponent {
  areaCode: string = '966+';
  loginForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, this.numberValidation(/^5\d{8}$/)]],
    });
  }
  // loginForm= new FormGroup({
  //   phoneNumber :new FormControl('',[Validators.required , this.numberValidation(/^5\d{8}$/)]) 
  // })

  onSubmit() {
    console.log(this.loginForm)
    console.log(this.loginForm.value.phoneNumber)
  }

  numberValidation(nameRe: RegExp  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      // return { forbiddenName: { value: control.value } }
      return !forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

}
