import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    rtl:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2.5
      },
      940: {
        items: 2.5
      }
    },
    nav: false
  }

  slidesStore: any[] = [{
    src: 'assets/aroovia-icons/swimming-pool.png',
    alt: 'img'
  },
  {
    src: 'assets/aroovia-icons/swimming-pool.png',
    alt: 'img'
  }, {
    src: 'assets/aroovia-icons/swimming-pool.png',
    alt: 'img'
  }


  ]
}
