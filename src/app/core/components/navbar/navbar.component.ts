import { AppUser } from '../../../shared/models/app-user';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed;
  appUser : AppUser;

  constructor(private auth : AuthService) { 
    auth.appUser$.subscribe(appUser=>this.appUser = appUser);
    // afAuth.authState.subscribe(x=>console.log(x)); //log user information
  }

  logout(){
    this.auth.logout();
  }
}
