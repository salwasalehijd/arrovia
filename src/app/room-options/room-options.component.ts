import { Component } from '@angular/core';

@Component({
  selector: 'app-room-options',
  templateUrl: './room-options.component.html',
  styleUrls: ['./room-options.component.css']
})
export class RoomOptionsComponent {
  rows = [
    { image: 'path-to-image-1.jpg', data: ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'] },
    { image: 'path-to-image-2.jpg', data: ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'] },
   
  ];
}
