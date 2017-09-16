import { UserService } from './user.service';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userServive: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/' //get var from url or home
    localStorage.setItem('returnUrl', returnUrl); //save cockies key: value

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => { 
      if (user) return this.userServive.get(user.uid);
      return Observable.of(null);
    });
  }
}
