import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-info',
  templateUrl: './reservation-info.component.html',
  styleUrls: ['./reservation-info.component.css']
})
export class ReservationInfoComponent {
  checkInTime: string = 'من 12:00 مساءً إلى 3:00 مساءً';
  checkOutTime: string = 'من 10:00 صباحاً إلى 12:00 مساءً';
  cancellationPolicy: string = 'تتباين سياسة إلغاء الحجز والدفع المسبق وفقاً لنوع مكان الإقامة المحجوز. يرجى التحقق من الشروط التي قد يتم تطبيقها على كل خيار عند تحديد اختيارك.';
  // Add other properties as needed
}
