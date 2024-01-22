import { Component } from '@angular/core';


import {CategoryItemInterface} from '../category-item/category-item-interface'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  categoriesDetails:CategoryItemInterface[]=[
    {
      
      categoryTitle:'فندق'
    },
    {
      
      categoryTitle:'قصور'
    },
    {
      
      categoryTitle:'فيلا'
    },
    {
      
      categoryTitle:'شقة'
    },
    {
      
      categoryTitle:'شواطئ'
    },
    {
      
      categoryTitle:'مخيم'
    },
    {
      
      categoryTitle:'جبلي'
    },
    {
      
      categoryTitle:'استراحة'
    },
    {
      
      categoryTitle:'ريف'
    },
    {
      
      categoryTitle:'مسابح'
    },
  ]
  listOneTitle:string='الدعم الفني'
}
