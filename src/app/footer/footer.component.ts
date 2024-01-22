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
  categoriesTitle:string='اختر المكان المفضل لك'
  categoriesSubtitle:string='مركز الدعم'
  categoriesSubtitleTwo:string='الأسئلة الشائعة'

  termsAndConditions:any[]=[
    {
      termsAndConditionsTitle:'الشروط والأحكام',
      termsAndConditionsSubtitleOne:'الشروط والأحكام',
      termsAndConditionsSubtitleTwo:'اتفاقية الخصوصية',
      termsAndConditionsSubtitleThree:'اتفاقية الإستخدام',
      termsAndConditionsSubtitleFour:'سياسة الإلغاء'
  },
  {
    termsAndConditionsTitle:'الشروط والأحكام',
    termsAndConditionsSubtitleOne:'الشروط والأحكام',
    termsAndConditionsSubtitleTwo:'اتفاقية الخصوصية',
    termsAndConditionsSubtitleThree:'اتفاقية الإستخدام',
    termsAndConditionsSubtitleFour:'سياسة الإلغاء'
},
{
  termsAndConditionsTitle:'الشروط والأحكام',
  termsAndConditionsSubtitleOne:'الشروط والأحكام',
  termsAndConditionsSubtitleTwo:'اتفاقية الخصوصية',
  termsAndConditionsSubtitleThree:'اتفاقية الإستخدام',
  termsAndConditionsSubtitleFour:'سياسة الإلغاء'
}
]

}
