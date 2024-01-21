import { Component } from '@angular/core';
import { CategoryItemInterface } from './category-item-interface';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {
categories:CategoryItemInterface[]=[
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'فندق'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'قصور'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'فيلا'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'شقة'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'شواطئ'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'مخيم'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'جبلي'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'استراحة'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'ريف'
  },
  {
    categoryImage:'assets/category-placeholder.png',
    categoryTitle:'مسابح'
  },
]

}
