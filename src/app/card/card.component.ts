import { Component, Input } from '@angular/core';
import { CardInterface } from './card-interface';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {


  @Input() cards: CardInterface[] = [];
}
