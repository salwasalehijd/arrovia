import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ChaletsOptionsComponent } from './chalets-options/chalets-options.component';
import { ReservationInfoComponent } from './reservation-info/reservation-info.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { RoomOptionsComponent } from './room-options/room-options.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    DatepickerComponent,
    ReservationComponent,
    HotelDetailsComponent,
    ChaletsOptionsComponent,
    ReservationInfoComponent,
    UserReviewsComponent,
    RoomOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
