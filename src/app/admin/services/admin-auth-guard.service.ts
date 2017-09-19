import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userServive: UserService) { }

  canActivate(): Observable<boolean> {
   return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
  }
}
