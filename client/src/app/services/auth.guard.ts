import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {tap, take, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.authenticated) { return true; }
    return this.auth.currentUserObservable.pipe(
      map(authInfo => authInfo.isLoggedIn()),
      take(1),
      tap(allowed => {
          if (!allowed) {
              this.router.navigate(['/login']);
          }
      }), );
  }
}
