import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IHttpOptions } from '../models/IHttpOptions.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean;
  getHttpOptions: Observable<IHttpOptions>;
  userObservable: Observable<User>;
  constructor(public afAuth: AngularFireAuth) {
    this.userObservable = this.afAuth.authState;
    this.getHttpOptions = this.afAuth.idToken
      .pipe(map(token => {
        this.isAuth = token ? true : false;
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
  login(email, password): any {
    console.log('service auth', email, password);
    const retour = this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
    console.log(retour);
  }
  loginGoogle() {
    console.log('service auth login google');
    const retour = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log(retour);
    this.afAuth.idToken.subscribe(token => {
      console.log(token);
    });
  }
  register(email, password): any {
    console.log('service auth register');
    return this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): any {
    console.log('service auth logout');
    const retour = this.afAuth.auth.signOut();
    console.log(retour);
  }

}

export interface User {
  idFirebase: string;
  isActive: boolean;
  idSubscription: string;
}
