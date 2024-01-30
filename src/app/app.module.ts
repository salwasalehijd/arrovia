import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DealsComponent } from './deals/deals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecomendedComponent } from './recomended/recomended.component';
import { CloseDestinationsComponent } from './close-destinations/close-destinations.component';
import { MightLikeComponent } from './might-like/might-like.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchcardsComponent } from './searchcards/searchcards.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { SigninComponent } from './signin/signin.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [

    FilterComponent,
    CardComponent,
    AppComponent,
    CategoriesComponent,
    CategoryItemComponent,
    DealsComponent,
    RecomendedComponent,
    CloseDestinationsComponent,
    MightLikeComponent,
    DownloadComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SearchcardsComponent,
    HeaderCarouselComponent,

    SigninComponent,
    SearchResultsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
