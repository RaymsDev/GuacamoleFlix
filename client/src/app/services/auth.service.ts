import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable, of, from, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map, } from 'rxjs/operators';
import { IHttpOptions } from '../models/IHttpOptions.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth$: Subject<boolean>;
  isAuth: boolean;
  userObservable: Observable<User>;
  userDetails: firebase.User = null;
  getHttpOptions: Observable<IHttpOptions>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.isAuth = false;
    this.auth$ = new Subject<boolean>();
    this.userObservable = this.afAuth.authState;
    this.getHttpOptions = this.afAuth.idToken
      .pipe(map(token => {
        const isAuthCurrent = token ? true : false;
        if (this.isAuth !== isAuthCurrent) {
          this.auth$.next(this.isAuth);
        }
        return {
          headers: new HttpHeaders()
            .set('Authorization', token || '')
            .set('Content-Type', 'application/json')
        };
      }));
  }




  getUser(): Observable<User> {
    return this.userObservable;
  }
  login(email, password) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }
  loginGoogle() {
    return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
  }
  register(email, password) {
    return from(this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password));
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/']);
      });
  }

}

export interface User {
  idFirebase: string;
  isActive: boolean;
  idSubscription: string;
}

