import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-close-destinations',
  templateUrl: './close-destinations.component.html',
  styleUrls: ['./close-destinations.component.css']
})
export class CloseDestinationsComponent {
  constructor() {

  }
images:any[]=[
{
  title:'الرياض',
  imgsrc:'assets/aroovia-icons/riyad.png'
},
{
  title:'دبي',
  imgsrc:'assets/aroovia-icons/dubai.png'
},
{
  title:'القاهرة',
  imgsrc:'assets/aroovia-icons/cairo.png'
},

]

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
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
}
