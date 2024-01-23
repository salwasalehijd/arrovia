import { Component } from '@angular/core';

@Component({
  selector: 'app-searchcards',
  templateUrl: './searchcards.component.html',
  styleUrls: ['./searchcards.component.css']
})
export class SearchcardsComponent {


  searchTitle:string='ابحث عن وجهة';
  guestTitle:string='الضيوف';
  startDateTitle:string='تاريخ الدخول';
  chooseStartDate:string='اختر تاريخ';
  endDateTitle:string='تاريخ الخروج'
  chooseEndDate:string='اختر تاريخ'
}
