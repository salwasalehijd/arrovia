import { Component } from '@angular/core';

@Component({
  selector: 'app-close-destinations',
  templateUrl: './close-destinations.component.html',
  styleUrls: ['./close-destinations.component.css']
})
export class CloseDestinationsComponent {
images:any[]=[
{
  title:'الرياض',
  imgsrc:'assets/card.png'
},
{
  title:'دبي',
  imgsrc:'assets/card.png'
},
{
  title:'القاهرة',
  imgsrc:'assets/card.png'
}
]
}
