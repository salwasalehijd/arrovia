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
        categoryImage:'assets/aroovia-icons/Group 688.svg',
        categoryTitle:'فندق'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 687.svg',
        categoryTitle:'قصور'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 686.svg',
        categoryTitle:'فيلا'
      },
      {
        categoryImage:'assets/aroovia-icons/bed.svg',
        categoryTitle:'شقة'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 685.svg',
        categoryTitle:'شواطئ'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 684.svg',
        categoryTitle:'مخيم'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 683.svg',
        categoryTitle:'جبلي'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 682.svg',
        categoryTitle:'استراحة'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 681.svg',
        categoryTitle:'ريف'
      },
      {
        categoryImage:'assets/aroovia-icons/Group 680.svg',
        categoryTitle:'مسابح'
      },
    ]
}
