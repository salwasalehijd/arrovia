import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {CategoryItemInterface} from '../category-item/category-item-interface'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoriesDetails:CategoryItemInterface[]=[
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
