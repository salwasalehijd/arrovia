import { Component } from '@angular/core';
import { CardInterface } from './card-interface';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  
   cards: CardInterface[] =[
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
    // Add more objects if needed
  ];
}
