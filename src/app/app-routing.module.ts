import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'signin', component:SigninComponent},
{path:'search', component:SearchResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
