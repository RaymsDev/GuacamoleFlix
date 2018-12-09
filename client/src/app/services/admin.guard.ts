import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          return false;
        }

        return user.isAdmin;
      }),
      tap(isAuthAndAdmin => {
        if (!isAuthAndAdmin) {
          console.log('access denied => not admin');
          this.router.navigate(['/login']);
        }
      }));
  }
}
