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
  loginFormPhone: FormGroup;
  validationFormPhone: FormGroup;
  loginEmailForm:FormGroup;
  codeFormPhoneView: boolean = false;
  loginFormPhoneView:boolean=true;
  emailFormView:boolean=false;
  phoneButton:boolean=false;
  emailButton:boolean=false;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.loginFormPhone = this.fb.group({
      phoneNumber: ['', [Validators.required, this.numberValidation(/^5\d{8}$/)]],
    });
    this.validationFormPhone = this.fb.group({
      validationCodePhoneOne: ['', [Validators.required, this.numberValidation(/^\d{1}$/)]],
      validationCodePhoneTwo: ['', [Validators.required, this.numberValidation(/^\d{1}$/)]],
      validationCodePhoneThree: ['', [Validators.required, this.numberValidation(/^\d{1}$/)]],
      validationCodePhoneFour: ['', [Validators.required, this.numberValidation(/^\d{1}$/)]]
    });
    this.loginEmailForm=this.fb.group({
      email:[[Validators.required,Validators.email]]
    })
    if(this.loginFormPhone){
      this.phoneButton=true;
      this.emailButton=false;
    }
    if(this.loginEmailForm){
      this.phoneButton=false;
      this.emailButton=true;
    }
  }

  onSubmitPhone() {


    if (this.loginFormPhone.status === 'VALID') {
      this.codeFormPhoneView=true;
      this.loginFormPhoneView=false;
    }
  }

  onSubmitEmail() {

    if (this.loginEmailForm.status === 'VALID') {
      this.codeFormPhoneView=true;
      this.emailFormView=false;
    }
  }


  numberValidation(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      // return { forbiddenName: { value: control.value } }
      return !forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
  viewPhoneLogin(){
    this.loginFormPhoneView=true;
    this.emailFormView=false
    this.emailButton=true;
    this.phoneButton=false;
  }

  viewEmailLogin(){
    this.loginFormPhoneView=false;
    this.emailFormView=true;
    this.emailButton=false;
    this.phoneButton=true;
  }
  
}
