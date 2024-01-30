import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservationData = {
    totalAmount: '1799,00 ريال',
    guests: '4 ضيوف',
    stayDates: '4 ليالي ديسمبر 2023',
    nightRate: '500,00 ريال'
    // Add other properties as needed
  };
}
