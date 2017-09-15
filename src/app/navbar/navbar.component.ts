import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed;
  user$: Observable<firebase.User>;

  constructor(private afAuth : AngularFireAuth) { 
    this.user$ = afAuth.authState;

    // afAuth.authState.subscribe(x=>console.log(x)); //log user information
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}