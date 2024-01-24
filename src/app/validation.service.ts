import { Injectable } from '@angular/core';

import { Form, FormBuilder, FormControl,FormGroup,Validators,ValidatorFn ,AbstractControl,ValidationErrors } from '@angular/forms';

export function numberValidation(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}