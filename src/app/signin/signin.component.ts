import { Component } from '@angular/core';
import { Form, FormControl,FormGroup,ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],


})
export class SigninComponent  {
areaCode:string='+966';
constructor(public dialog: MatDialog){}
// const numberForm:Form= new FormGroup({
//   number :new FormControl('',[
//     // Valnum(/^5\d{8}$/  )
//     Validators.required,
//     Validators.minLength(4),
//   ])
// })

}
