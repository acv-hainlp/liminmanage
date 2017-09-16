import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //check if user login success get url from local store
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe(user => { //check user
      if(user) { // check user islogin ?
        userService.save(user); //when user login => save user to database
        //when user login, save new user to database

        let returnUrl = localStorage.getItem('returnUrl'); // get url from local
        router.navigateByUrl(returnUrl); //redirect
      }
    });
  }
}
