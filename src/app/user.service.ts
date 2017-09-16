import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { } //connect firebase database

  save(user:firebase.User) // firebase.user is all user login ( google, facebook ,.. )
  {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName, 
      email: user.email
    })
  }
}
