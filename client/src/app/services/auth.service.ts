import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable, of, from, } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, } from 'rxjs/operators';
import { IHttpOptions } from '../models/IHttpOptions.model';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { IUser } from '../../../../both/models/user.model';
import { environment } from 'src/environments/environment';
const baseUrl = `${environment.urlApi}/users`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<IUser>;
  userObservable: Observable<User>;
  userDetails: firebase.User = null;
  getHttpOptions: Observable<IHttpOptions>;
  constructor(public afAuth: AngularFireAuth, public httpClient: HttpClient, private router: Router) {
    this.userObservable = this.afAuth.authState;
    this.getHttpOptions = this.afAuth.idToken
      .pipe(map(token => {
        return {
          headers: new HttpHeaders()
            .set('Authorization', token || '')
            .set('Content-Type', 'application/json')
        };
      }));

    this.user = this.afAuth.authState
      .pipe(switchMap((firebaseUser) => {
        if (firebaseUser) {
          return this.getHttpOptions
            .pipe(flatMap((httpOptions) => {
              return this.httpClient
                .get<IUser>(`${baseUrl}/current/${firebaseUser.uid}`, httpOptions);
            }));
        } else {
          return of(null);
        }
      }));
  }

  get isAuthenticated(): boolean {
    return this.user !== null;
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
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/']);
      });
  }

}


