import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed;

  constructor(public auth : AuthService) { 
    // afAuth.authState.subscribe(x=>console.log(x)); //log user information
  }

  logout(){
    this.auth.logout();
  }
}
