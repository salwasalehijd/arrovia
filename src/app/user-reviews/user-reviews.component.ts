import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent {
  reviews = {
    
    name: 'يزيد العمري',
    image: '../../assets/user.jfif',
    comment: 'المالك كان لطيفاً للغاية ، وتأكد من الحصول على المساعدة التي نحتاجها حتى عندما لم يكن موجوداً. الموقع والمنتجع بشكل عام رائع.'
  
};
}
