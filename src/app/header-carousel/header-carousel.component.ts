import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  slidesStore:any[]=[
    
  {
    src:"assets/aroovia-icons/carousel-image.png"
  },
  {
    src:"assets/aroovia-icons/carousel-image.png"
  },
  {
    src:"assets/aroovia-icons/carousel-image.png"
  },


]
}
