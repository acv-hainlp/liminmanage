import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router:Router) { } //import to check login 

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user=> {
      if(user) return true // login success

      this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }}); // redirect to login page, queryparam: notice where user had block
      return false;
    });
  }

}
