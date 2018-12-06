import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string;
  user: Observable<User>;
  userObservable: Observable<User>;
  userDetails: firebase.User = null;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.userObservable = this.afAuth.authState;
    this.afAuth.idToken.subscribe(token => this.userToken = token);
    this.afAuth.authState.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log('this.userDetails');
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
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
    return retour;
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

  isLoggedIn() {
    if (this.userDetails === null) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}

export interface User {
  idFirebase: string;
  isActive: boolean;
  idSubscription: string;
}

