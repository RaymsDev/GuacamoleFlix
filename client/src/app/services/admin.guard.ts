import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }


  canActivate() {
    return this.userService.getCurrentUserDetails()
      .pipe(map((user) => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }))
      .pipe(take(1));
  }
}
