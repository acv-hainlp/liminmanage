import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed;
  user: firebase.User;

  constructor(private afAuth : AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user);
    afAuth.authState.subscribe(x=>console.log(x)); //log user information
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
