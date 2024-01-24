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

  constructor(private router: Router,public dialog: MatDialog) {
    this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomeRoute = event.urlAfterRedirects === '/home';
    });


  }
  openDialog() {
    const dialogRef = this.dialog.open(SigninComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
