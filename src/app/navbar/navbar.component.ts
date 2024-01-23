import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

userName:string='يزيد العمري'
profileList:boolean=false
languge:string='EN'
openProfileList(){
  this.profileList=!this.profileList;
}
}
