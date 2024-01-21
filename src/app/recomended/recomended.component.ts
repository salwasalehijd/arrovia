import { Component } from '@angular/core';
import {CardInterface} from '../card/card-interface'
@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent {
  title:string='ضيوفنا يفضلون'
  filtertitle:string='تصفية'
  carddetails: CardInterface[] =[
    {
      image: '../../assets/card.png',
      title: 'شاليهات هايسيندا',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة'
    },
    {
      image: '../../assets/card.png',
      title: 'فيلا خاصة بمسبح عائلي',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة'
    },
    {
      image: '../../assets/card.png',
      title: 'فيلا فخمة على الجبل',
      raiting: 8.7,
      location_city: 'مرسى مطروح',
      location_country: 'مصر',
      price: 500.00,
      currency: 'ريال',
      duration: 'في الليلة'
    },
 
    {
      image: '../../assets/card.png',
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
