import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {CardInterface} from '../card/card-interface';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  
})
export class FilterComponent {
  title:string='عنوان التصنيف أو الفلتر'
  filtertitle:string='تصفية'
  carddetails: CardInterface[] =[
    {
      image: '../../assets/aroovia-icons/luxury-place-resort.png',
      title: 'شاليهات هايسيندا',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة'
    },
    {
      image: '../../assets/aroovia-icons/swimming-pool.png',
      title: 'فيلا خاصة بمسبح عائلي',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة'
    },
    {
      image: '../../assets/aroovia-icons/169741.png',
      title: 'فيلا فخمة على الجبل',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة'
    },
 
    {
      image: '../../assets/aroovia-icons/2150683421.png',
      title: 'غرفة فردية بواجهة على البح...',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة' 
    }
   
  ];
}
