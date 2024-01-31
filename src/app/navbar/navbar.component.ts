import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from 'app/signin/signin.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userName: string = 'يزيد العمري'
  profileList: boolean = false
  languge: string = 'EN'
  openProfileList() {
    this.profileList = !this.profileList;
  }

  isHomeRoute: boolean = false;
 isSearchRoute:boolean=false;

  constructor(private router: Router,public dialog: MatDialog) {
  this.HomeRoute();
  this.searchRoute()
  }
  HomeRoute(){
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.isHomeRoute = event.urlAfterRedirects === '/home';
        // console.log(this.isHomeRoute)
      });
  }
searchRoute(){
  this.router.events.pipe(
    filter((event):event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(
      (event:NavigationEnd)=>{
        this.isSearchRoute=event.urlAfterRedirects ==='/search'
      });
  
}
  openDialog() {
    const dialogRef = this.dialog.open(SigninComponent);
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
